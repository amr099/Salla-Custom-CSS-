const container = document.createElement("section");
const quantity = 6;
const speed = 50;

container.classList = "marquee-component";

container.innerHTML = `
<div>
    <div class="marquee-container" style="--width-item: 600px; --speed: ${speed}s; --quantity: ${quantity}">
        <div class="content">
            ${
                Array.from({ length: quantity })
                    .map((_, i) => {
                        return `
                        <div class="item" style="--position: ${i + 1}; color:white;">
                             شحن مجاني للطلبات بقيمة 250 ريال فأكثر
                        </div>`;
                    })
                    .join("")
            }
        </div>
    </div>
</div>
`;

const header = document.querySelector('.store-header, header');
if (header) {
    header.before(container);
} else {
    document.body.prepend(container);
}

/* Css */
.marquee-component{
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
}

.marquee-component .marquee-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 48px;
    background-color: #2c3d1f;
    color: #fff;
}

.marquee-component .marquee-container:hover .item {
    animation-play-state: paused;
}

.marquee-component .marquee-container .content {
    min-width: calc(var(--width-item) * var(--quantity));
    height: 100%;
    display: flex;
    position: relative;
}

.marquee-component .marquee-container .item {
    width: 600px;
    position: absolute;
    left: 0;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    animation: auto-run var(--speed) linear infinite;
    animation-delay: calc(
        (var(--speed) / var(--quantity)) * (var(--position) - 1) - var(--speed)
    );
}

@keyframes auto-run {
    from {
      left: 100%;
    }
    to {
                left: calc(var(--width-item) * -1);

    }
}

@media (max-width:768px){
    .marquee-component .marquee-container{
        height:42px;
    }

    .marquee-component .marquee-container .item{
        width:420px;
        font-size:13px;
    }
}
