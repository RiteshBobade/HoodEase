// signup.js

function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === 'password' ? 'text' : 'password';
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (!name || !email || !password) {
    alert("All fields are required.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(u => u.email === email);
  if (userExists) {
    alert("Email is already registered.");
    return;
  }

  const hashedPassword = btoa(password);
  users.push({ name, email, password: hashedPassword });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! Redirecting to login...");
  window.location.href = "login.html";
});
