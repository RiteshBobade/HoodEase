// login.js

function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === 'password' ? 'text' : 'password';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const hashedInput = btoa(password);

  const user = users.find(u => u.email === email && u.password === hashedInput);

  if (user) {
    alert(`Welcome, ${user.name}! Redirecting to homepage...`);
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password.");
  }
});
