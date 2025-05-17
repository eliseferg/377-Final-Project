document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');

  async function validateEmail(email) {
    const apiKey = '61e762291d7b1b3edde8bb6563bedd57';
    const url = `https://apilayer.net/api/check?access_key=${apiKey}&email=${encodeURIComponent(email)}&smtp=1&format=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(`Validation result for ${email}:`, data);
      return data.format_valid && data.smtp_check;
    } catch (error) {
      console.error('Email validation failed:', error);
      return false;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const workEmail = document.getElementById('workEmail').value;
    const personalEmail = document.getElementById('personalEmail').value;
    const recoveryEmail = document.getElementById('recoveryEmail').value;

    const workValid = await validateEmail(workEmail);
    const personalValid = await validateEmail(personalEmail);
    const recoveryValid = await validateEmail(recoveryEmail);

    if (!workValid || !personalValid || !recoveryValid) {
      alert('Please enter valid email addresses. One or more emails failed verification.');
      return;
    }

    alert('All emails verified! Account created.');
    // TODO: redirect or submit to server
  });
});
