const section = document.createElement("section");
section.classList.add("full-width-video-section");

const video = document.createElement("video");
video.src =
    "https://res.cloudinary.com/dpbnqiazo/video/upload/v1726912315/rfynlfsgheokpu8lxf6e.mp4";
video.autoplay = true;
video.muted = true;
video.loop = true;
section.appendChild(video);

const overlay = document.createElement("div");
overlay.classList.add("video-overlay");

const heading = document.createElement("h1");
heading.textContent = "أضف لمسة من الأناقة والراحة إلى سيارتك";
heading.classList.add("overlay-heading");
overlay.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent =
    "Yاكتشف مجموعة إكسسوارات السيارة التي تجمع بين التصميم العملي والأناقة العصرية، لجعل كل رحلة أكثر راحة وتميزاً.";
paragraph.classList.add("overlay-paragraph");
overlay.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = "تسوق الان";
button.classList.add("btn-changing");
overlay.appendChild(button);

section.appendChild(overlay);

const prevSection = document.querySelector(".g_cat");
if (prevSection) {
    prevSection.parentNode.insertBefore(section, prevSection);
} else {
    console.error('previous section not found.');
}
