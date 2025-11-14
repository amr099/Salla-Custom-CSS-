/* Whatsapp */ 
const waBtn = document.createElement("div");
waBtn.className = "wa-btn";
waBtn.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg">
`;
document.body.appendChild(waBtn);

waBtn.addEventListener("click", function () {
    window.open("https://wa.me/966509855617", "_blank"); 
});

const style = document.createElement("style");
style.innerHTML = `
.wa-btn {
    position: fixed;
    bottom: 25px;
    left: 25px;
    width: 70px;
    height: 70px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999999;
    box-shadow: 0 8px 25px rgba(0,0,0,0.20);
    transition: transform .25s ease, box-shadow .25s ease;
}
.wa-btn img {
    width: 35px;
    height: 35px;
    filter: brightness(0) invert(1);
}
.wa-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}
`;
document.head.appendChild(style);

