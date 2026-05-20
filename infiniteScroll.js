(function() {
    const marquee = document.createElement('div');
    marquee.className = 'marquee';
    
    const style = document.createElement('style');
    style.innerHTML = `
        .marquee { overflow: hidden; width: 100%; background: #f4f4f4; padding: 10px 0; white-space: nowrap; position: relative; }
        .marquee-track { display: flex; width: max-content; animation: scroll 20s linear infinite; }
        .marquee-item:nth-child(odd) { margin: 0 20px; font-weight: bold; }
        .marquee-item img { height: 20px; display: block; }
        @keyframes scroll { from { transform: translateX(100%); } to { transform: translateX(-50%); } }
        .marquee:hover .marquee-track { animation-play-state: paused; }
    `;
    document.head.appendChild(style);

    marquee.innerHTML = `
        <div class="marquee-track">
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
            <div class="marquee-item">الشحن مجاني على الطلبات اللى تزيد عن 300 ريال</div>
            <div class="marquee-item"><img src="https://i.ibb.co/VYyzfm43/1.png" alt=""></div>
        </div>
    `;

    document.body.prepend(marquee);
})();


