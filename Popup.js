document.addEventListener("DOMContentLoaded", function () {
  // === Create Overlay Background ===
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";

  // === Create Popup Container ===
  let popup = document.createElement("div");
  popup.style.position = "relative";
  popup.style.maxWidth = "90%";
  popup.style.maxHeight = "90%";

  // === Add Image ===
  let img = document.createElement("img");
  img.src = "https://i.ibb.co/C5C8DFtb/Lote-Store-1-1.png";
  img.style.width = "90%";
   img.style.maxWidth = "600px";
  img.style.height = "auto";
  img.style.margin="auto";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";

  // === Add Close Button ===
  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "10px";
  closeBtn.style.right = "20px";
  closeBtn.style.fontSize = "40px";
  closeBtn.style.color = "#fff";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontWeight = "bold";

  // === Close on Click ===
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });

  // === Append Elements ===
  popup.appendChild(img);
  popup.appendChild(closeBtn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
});