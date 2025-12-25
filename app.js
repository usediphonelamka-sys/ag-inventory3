document.addEventListener("DOMContentLoaded", () => {
  loadInventory();
  loadNotifications();
});

function loadInventory() {
  const div = document.getElementById("inventory");
  div.innerHTML = "";

  inventoryData.forEach(item => {
    const out = item.quantity === 0 ? "out" : "";
    div.innerHTML += `
      <div class="item ${out}">
        <img src="${item.image}">
        ${item.partType} | ${item.subType} | ${item.model}
        — Qty: ${item.quantity}
      </div>
    `;
  });
}

function loadNotifications() {
  const ul = document.getElementById("notifications");
  ul.innerHTML = "";

  inventoryData
    .filter(x => x.quantity === 0)
    .forEach(item => {
      ul.innerHTML += `
      <li class="out">
        ${item.partType} | ${item.subType} | ${item.model}
      </li>
    `;
    });
}