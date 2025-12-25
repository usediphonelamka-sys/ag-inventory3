function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "Agsparepart123" && p === "Zawngek123") {
    localStorage.setItem("loggedIn", "yes");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}