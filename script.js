const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

// Switch Tabs
loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginError.textContent = "";
  registerError.textContent = "";
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  loginError.textContent = "";
  registerError.textContent = "";
});

// Handle Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const storedUsers = JSON.parse(localStorage.getItem("users") || "{}");

  if (storedUsers[username] && storedUsers[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    loginError.textContent = "Invalid username or password.";
  }
});

// Handle Registration
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  const storedUsers = JSON.parse(localStorage.getItem("users") || "{}");

  if (storedUsers[username]) {
    registerError.textContent = "Username already exists.";
  } else {
    storedUsers[username] = password;
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Registration successful! Please sign in.");
    loginTab.click();
  }
});
