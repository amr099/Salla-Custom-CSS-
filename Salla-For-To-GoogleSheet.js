document.addEventListener("DOMContentLoaded", function () {
if(window.location.pathname==="/%D8%A7%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D8%A7%D9%86/page-1461214003"){
    // Select the target element
    const targetElement = document.querySelector(
      ".content.content--single-page"
    );

    if (targetElement) {
      // Replace its content with the form
      targetElement.innerHTML = `
        <div class="container">
          <form id="form" class="myform">
            <h2>تواصل معنا</h2>
            <div class="form-control">
              <label for="name">الاسم</label>
              <input type="text" id="name" name="name" placeholder="أدخل اسمك" />
              <small>الاسم مطلوب</small>
            </div>
            <div class="form-control">
              <label for="phone">رقم الجوال</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="أدخل رقم الجوال"
              />
              <small>رقم الجوال مطلوب</small>
            </div>
            <div class="form-control">
              <label for="service">نوع الخدمة</label>
              <select id="service" name="service">
                <option value="">اختر الخدمة</option>
                <option value="design-interfaces">خدمات المساج </option>
                <option value="bedrooms"> خدمات الحمام المغربي</option>
                <option value="kitchens">قسم البديكير والعنايه</option>
                <option value="majalis">قسم البكجات والهداية</option>
              </select>
              <small>نوع الخدمة مطلوب</small>
            </div>
            <button type="submit">تسجيل</button>
          </form>
        </div>
      `;

      // Form validation and submission
      const form = document.getElementById("form");
      const name = document.getElementById("name");
      const phone = document.getElementById("phone");
      const service = document.getElementById("service");

      // New Google Sheets script URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzzRQUHGL16LgsqURmFY7MRZ6WW-OyThFJyQ_X-m5BZDLM6GtEpqFap2_U6cl9-uopg/exec";

      // Helper functions for validation
      const showError = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add("error");
        formControl.querySelector("small").innerText = message;
      };

      const showSuccess = (input) => {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
        formControl.classList.add("success");
      };

      const checkRequired = (inputs) => {
        let isValid = true;
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            showError(input, `${input.previousElementSibling.innerText} مطلوب`);
            isValid = false;
          } else {
            showSuccess(input);
          }
        });
        return isValid;
      };

      // Submit form data to Google Sheets
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Validate fields
        const isValid = checkRequired([name, phone, service]);

        if (isValid) {
          const formData = new FormData(form);

          try {
            const response = await fetch(scriptURL, {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              alert("تم التسجيل بنجاح!");
              form.reset();
              document.querySelectorAll(".form-control").forEach((fc) => {
                fc.classList.remove("success", "error");
              });
            } else {
              alert("حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("حدث خطأ أثناء الاتصال بالسيرفر.");
          }
        }
      });
    }
  }
   document.querySelector(".store-footer").before(container)
});
