document.addEventListener("DOMContentLoaded", function () {
  const faqHTML = `
  <section class="faq-section">
    <h2 class="faq-h">الأسئلة الشائعة</h2>
    <p class="faq-p">إجابات على أهم الأسئلة</p>
    <div class="faq container">

      <div class="faq-item">
        <div class="faq-question">
          <h3>هل جميع المجوهرات أصلية ومضمونة؟</h3>
          <span class="icon">+</span>
        </div>
        <div class="faq-answer">
          <p>نعم، جميع منتجاتنا مصنوعة من ذهب وأحجار كريمة أصلية مع شهادات توثيق معتمدة.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>هل الشحن متاح لجميع مدن السعودية؟</h3>
          <span class="icon">+</span>
        </div>
        <div class="faq-answer">
          <p>نعم، نوفر خدمة شحن آمنة وسريعة لجميع مدن المملكة، مع تغليف فاخر يحافظ على القطعة.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>كم يستغرق وقت التوصيل؟</h3>
                    <span class="icon">+</span>

        </div>
        <div class="faq-answer">
          <p>عادةً ما يصل الطلب خلال 3 – 5 أيام عمل داخل السعودية.</p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>هل تتوفر خدمة الدفع بالتقسيط؟</h3>
                    <span class="icon">+</span>

        </div>
        <div class="faq-answer">
          <p>نعم، يمكنكم الاستفادة من خدمة "تمارا" أو "تابي" للتقسيط بدون فوائد.</p>
        </div>
      </div>

    </div>
  </section>
  `;

  const targetSection = document.querySelector(".s-block--testimonials");
  if (targetSection) {
    targetSection.insertAdjacentHTML("afterend", faqHTML);
  }

  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", function () {
      const parent = this.parentElement;
      const answer = parent.querySelector(".faq-answer");
      const icon = this.querySelector(".icon");

      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
        icon.textContent = "+";
      } else {
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active");
          item.querySelector(".icon").textContent = "+";
        });
        parent.classList.add("active");
        icon.textContent = "−";
      }
    });
  });
});

