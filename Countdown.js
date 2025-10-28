// === Countdown ===
const priceOuter = document.querySelector('.p-price-outer');

if (priceOuter) {
  const countdown = document.createElement('div');
  countdown.className = 'countdown';

  const units = [
    { key: 'Days', label: 'يوم' },
    { key: 'Hours', label: 'ساعة' },
    { key: 'Minutes', label: 'دقيقة' },
    { key: 'Seconds', label: 'ثانية' }
  ];

  const elements = {};

  units.forEach(({ key, label }) => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.id = key.toLowerCase();
    span.textContent = key === 'Days' ? '3' : '00';
    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.textContent = label;
    div.appendChild(span);
    div.appendChild(labelDiv);
    countdown.appendChild(div);
    elements[key.toLowerCase()] = span;
  });

  priceOuter.insertAdjacentElement('afterend', countdown);

  const storageKey = 'countdownEndTime';
  let endTime = localStorage.getItem(storageKey);

  if (!endTime) {
    endTime = Date.now() + 3 * 24 * 60 * 60 * 1000; 
    localStorage.setItem(storageKey, endTime);
  } else {
    endTime = parseInt(endTime, 10);
  }

  function updateCountdown() {
    const now = Date.now();
    const remaining = endTime - now;

    if (remaining <= 0) {
      elements.days.textContent = '0';
      elements.hours.textContent = '00';
      elements.minutes.textContent = '00';
      elements.seconds.textContent = '00';
      clearInterval(timer);
      localStorage.removeItem(storageKey);
      return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    elements.days.textContent = days;
    elements.hours.textContent = hours.toString().padStart(2, '0');
    elements.minutes.textContent = minutes.toString().padStart(2, '0');
    elements.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

/* CSS */
.countdown {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  justify-content: center;
  direction: rtl; 
}

.countdown div {
  text-align: center;
}

.countdown span {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
}

.label {
  font-size: 0.8rem;
  color: #777;
}

