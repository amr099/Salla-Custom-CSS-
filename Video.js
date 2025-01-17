const section = document.createElement("section");
section.classList.add("full-width-video-section");

const video = document.createElement("video");
video.src =
    "https://github.com/wpAzzrk/Moaaz/raw/refs/heads/main/videos/6f62264ca1ba78bf22aca839579fec74-ezgif.com-gif-to-mp4-converter.mp4";
video.autoplay = true;
video.muted = true;
video.loop = true;
video.style.width = "100%";
video.style.height = "100%";

section.appendChild(video);

const targetDiv = document.querySelector(".image-text");
if (targetDiv) {
    targetDiv.parentNode.insertBefore(section, targetDiv);
    ش;
} else {
    console.error('Element with class "target div" not found.');
}
