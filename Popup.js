document.addEventListener("DOMContentLoaded", function () {
  let overlay = document.createElement("div");
  overlay.className = "custom-overlay";

  let popup = document.createElement("div");
  popup.className = "custom-popup";

  let img = document.createElement("img");
  img.src = "https://i.ibb.co/C5C8DFtb/Lote-Store-1-1.png";
  img.className = "popup-img";

  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "popup-close";

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });

  popup.appendChild(img);
  popup.appendChild(closeBtn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
});


/* CSS 

.custom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.custom-popup {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.popup-img {
  width: 90%;
  max-width: 600px;
  height: auto;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}


*/