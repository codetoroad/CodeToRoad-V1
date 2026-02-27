const API_BASE = "https://YOUR_WORKER_URL";

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);

  loadStats();
}

async function loadStats() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await res.json();
  document.getElementById("stats").innerHTML =
    `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}