document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const interests = Array.from(document.getElementById('interests').selectedOptions).map(opt => opt.value);

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, interests })
  });

  const result = await response.json();
  localStorage.setItem('currentUser', result.user.name);
  window.location.href = 'matches.html';
});
