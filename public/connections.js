const form = document.getElementById('connection-form');
const matchesList = document.getElementById('matches-list');
const viewMatchesBtn = document.getElementById('view-matches');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const selected = Array.from(document.getElementById('interests').selectedOptions)
    .map(option => option.value);

  const res = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, interests: selected })
  });

  const data = await res.json();
  alert(data.message);
});

viewMatchesBtn.addEventListener('click', async () => {
  const name = document.getElementById('name').value.trim();
  if (!name) {
    alert("Enter your name first to view matches.");
    return;
  }

  const res = await fetch(`http://localhost:3000/api/match/${name}`);
  const matches = await res.json();

  matchesList.innerHTML = matches.map(u =>
    `<li>${u.name} — ${u.interests.join(', ')}</li>`
  ).join('');
});
