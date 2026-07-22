document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (!header) return;

    const text = "اكتشف عالم العطور العالمية الاستثنائية | تخفيضات الموسم خصومات كبرى تصل إلى 70% لفترة محدودة";

    const wrapper = document.createElement("div");
    wrapper.className = "marquee-wrapper";

    const track = document.createElement("div");
    track.className = "marquee-track";

    // Repeat the text enough times for a seamless marquee
    for (let i = 0; i < 36; i++) {
        const span = document.createElement("span");
        span.textContent = text;
        track.appendChild(span);
    }

    wrapper.appendChild(track);

    // Insert before the header
    header.parentNode.insertBefore(wrapper, header);
});

/* Marquee CSS

.marquee-wrapper {
    overflow: hidden;
    white-space: nowrap;
    background: #86092a;
    padding: 12px 0;
    width: 100%;
    box-sizing: border-box;
    direction: ltr;
  }

  .marquee-track {
    display: inline-flex;
    animation: scroll 20s linear infinite;
  }

  .marquee-track span {
    display: inline-block;
    color: #f5d9e0;
    font-size: 14px;
    font-weight: 400;
    padding: 0 30px;
    direction: rtl;
  }

  @keyframes scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-16.6667%); }
  }
  */
