document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".s-block--hero-slider p");
  targets.forEach((target) => {
    const link = document.createElement("a");
    link.textContent = "تسوق الآن";
    link.href = "https://sandraxstore.com/latest-products";
    link.className = "custom-shop-btn";
    target.insertAdjacentElement("afterend", link);
  });
});

/* css 

.custom-shop-btn {
    background-color: #4A692C;
    display: block;
    max-width: 200px;
    margin: 2rem auto auto;
    color: #fff;
    border: none;
    padding: 16px 32px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

*/