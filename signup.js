// Get form inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passOneInput = document.getElementById('passOne');
const passTwoInput = document.getElementById('passTwo');
const secQInput = document.getElementById('secQ');
const secAInput = document.getElementById('secA');

// Get button and message element
const signupBtn = document.querySelector('.signup button');
const messageDiv = document.querySelector('.signup-message');

// Add event listener to button
signupBtn.addEventListener('click', () => {
  // Get values from inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const passOne = passOneInput.value.trim();
  const passTwo = passTwoInput.value.trim();
  const secQ = secQInput.value.trim();
  const secA = secAInput.value.trim();

  // Validate inputs
  if (!name || !email || !passOne || !passTwo || !secQ || !secA) {
    messageDiv.textContent = 'Please fill in all fields.';
    return;
  }

  if (passOne !== passTwo) {
    messageDiv.textContent = 'Passwords do not match.';
    return;
  }

  // If all inputs are valid, show success message
  messageDiv.textContent = `Thank you for signing up, ${name}!`;
});
