const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3000;

const SUPABASE_URL = 'https://mtbolhzexfgfgrgxttzj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Ym9saHpleGZnZmdyZ3h0dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTgxOTYsImV4cCI6MjA2MzA5NDE5Nn0.KgoHdvUiQSWObYgpUJhSbs-4zLIUHCNVhm-NtWEsY7g';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// POST /api/users - Add user
   app.post('/api/users', async (req, res) => {
  let { name, interests } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  // Sanitize and ensure interests is an array
  if (typeof interests === 'string') {
    interests = [interests];
  } else if (!Array.isArray(interests)) {
    interests = [];
  }

  console.log('Received user:', { name, interests });

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, interests }])
      .select(); 

    if (error || !data) {
        console.error('Supabase insert error or no data:', error);
        return res.status(500).json({ message: 'Failed to add user' });
    }

    console.log('User added:', data);
    res.status(201).json({ message: 'User added successfully', user: data?.[0] || { name, interests } });

  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ message: 'Unexpected server error' });
  }
});


// GET /api/users - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// GET /api/match/:name - Find matches for user
app.get('/api/match/:name', async (req, res) => {
  const userName = req.params.name;

  try {
    // Get the user by name
    let { data: userData, error } = await supabase
      .from('users')
      .select('*')
      .eq('name', userName)
      .single();

    if (error || !userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get all other users
    let { data: allUsers, error: allUsersError } = await supabase
      .from('users')
      .select('*')
      .neq('name', userName);

    if (allUsersError) {
      throw allUsersError;
    }

    // Find matches by shared interests
    const matches = allUsers.filter(u =>
      u.interests.some(i => userData.interests.includes(i))
    );

    res.json(matches);
  } catch (error) {
    console.error('Match error:', error);
    res.status(500).json({ message: 'Failed to find matches' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at https://commons-inst377-final-project.onrender.com:${PORT}`);
});
