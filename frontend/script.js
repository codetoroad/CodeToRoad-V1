const API_BASE = "https://YOUR_WORKER_URL"; // replace later

async function loadProducts() {
  const res = await fetch(`${API_BASE}/products`);
  const data = await res.json();

  const container = document.getElementById("products");
  data.forEach(p => {
    container.innerHTML += `
      <a href="#" onclick="trackAndGo('${p.id}','${p.affiliate_url}')">
        ${p.name}
      </a>
    `;
  });
}

function trackAndGo(id, url) {
  fetch(`${API_BASE}/track-click`, {
    method: "POST",
    body: JSON.stringify({ productId: id })
  }).then(() => {
    window.location.href = url;
  });
}

loadProducts();