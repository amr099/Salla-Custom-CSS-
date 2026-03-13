/* Calculator 1 */

            if (window.location.href === "https://7rusini.com/p/vjAAB") {
                // Create a new section element
                var newSection = document.createElement("section");
                newSection.setAttribute("class", "calc1"); // Replace 'your-new-section-class' with the desired class for the new section

                // Add your content to the new section
                newSection.innerHTML = `
              <div class="container-c">
                <p class='note'>اذا كان هدفك نزول الوزن اختر مستوى النشاط (ضعيف) حتى لو كنت تمارس رياضة</p>
                <h2>حاسبة السعرات الحرارية</h2>
                <form id="calculatorForm">
                  <div class="form-group">
                    <label for="age">العمر:      </label>
                    <input type="number" id="age" name="age" required>
                  </div>
                  <div class="form-group">
                    <label for="gender">الجنس:</label>
                    <div class="gender-options">
                      <input type="radio" id="male" name="gender" value="male" required>
                      <label for="male">ذكر</label>
                      <input type="radio" id="female" name="gender" value="female" required>
                      <label for="female">أنثى</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="height">الطول (سم) :</label>
                    <input type="number" id="height" name="height" required>
                  </div>
                  <div class="form-group">
                    <label for="weight"> الوزن (كجم): </label>
                    <input type="number" id="weight" name="weight" required>
                  </div>
                  <div class="sp">
                    <label for="activity">النشاط الأسبوعي : </label>
                    <select id="activity" name="activity" required>
                      <option value="1.2">ضعيف (تمارين بسيطه أو لايوجد)</option>
                      <option value="1.375">نشيط (تمارين أو رياضة / يوم إلي ثلاثة أيام في الأسبوع)</option>
                      <option value="1.55">نشيط للغاية (تمارين أو رياضة / أربعه إلي خمسىة أيام في الأسبوع)</option>
                      <option value="1.725">(تمارين صعبة يوميا او ستة أيام في الأسبوع)</option>
                      <option value="1.9">(تمارين صعبة للغاية وأعمال بدنية أو تمرينين في اليوم يوميا)</option>
                    </select>
                  </div>
                  <button type="submit">أحسب</button>
                </form>
                <div id="result"></div>
              </div>
            `;

                // Find the target element to insert the new section
                var targetDiv = document.querySelector(".content-entry");
                targetDiv.insertAdjacentElement("afterend", newSection);

                // // Find the third section on the page
                // var thirdSection = targetDiv.children[4];

                // // Insert the new section after the third section
                // targetDiv.insertBefore(newSection, thirdSection.nextSibling);

                // Prevent the default form submission behavior
                document
                    .getElementById("calculatorForm")
                    .addEventListener("submit", function (event) {
                        event.preventDefault();

                        // Get the user input values
                        var age = parseInt(
                            document.getElementById("age").value
                        );
                        var height = parseInt(
                            document.getElementById("height").value
                        );
                        var weight = parseInt(
                            document.getElementById("weight").value
                        );
                        var gender = document.querySelector(
                            'input[name="gender"]:checked'
                        ).value;
                        var activity = parseFloat(
                            document.getElementById("activity").value
                        );

                        // Calculate BMR and other weight-related values
                        var bmr;
                        if (gender === "male") {
                            bmr = Math.round(
                                10 * weight + 6.25 * height - 5 * age + 5
                            );
                        } else {
                            bmr = Math.round(
                                10 * weight + 6.25 * height - 5 * age - 161
                            );
                        }
                        var maintainWeight = Math.round(bmr * activity);
                        var mildWeightLoss = Math.round(
                            maintainWeight - maintainWeight * 0.15
                        );
                        var weightLoss = Math.round(
                            maintainWeight - maintainWeight * 0.2
                        );
                        var extremeWeightLoss = Math.round(
                            maintainWeight - maintainWeight * 0.3
                        );

                        var link = "";
                        var ramadanLink = "";
                        if (extremeWeightLoss >= 0) {
                            link =
                                "https://7rusini.com/%D8%AC%D8%AF%D9%88%D9%84%20%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%20%D8%B1%D9%82%D9%85%201/p197317769";
                        }
                        if (extremeWeightLoss >= 1151) {
                            link = "https://7rusini.com/KjgGEZy";
                        }
                        if (extremeWeightLoss >= 1251) {
                            link = "https://7rusini.com/OqYzmVa";
                        }
                        if (extremeWeightLoss >= 1351) {
                            link = "https://7rusini.com/WlQKmdX";
                        }
                        if (extremeWeightLoss >= 1451) {
                            link = "https://7rusini.com/DGwgbxB";
                        }
                        if (extremeWeightLoss >= 1551) {
                            link = "https://7rusini.com/RAgrmjY";
                        }
                        if (extremeWeightLoss >= 1651) {
                            link = "https://7rusini.com/gZENwqE";
                        }

                        // ramadan
                        if (
                            extremeWeightLoss >= 0 &&
                            extremeWeightLoss <= 1150
                        ) {
                            ramadanLink = "https://7rusini.com/ePlnlGP";
                        } else if (
                            extremeWeightLoss >= 1151 &&
                            extremeWeightLoss <= 1250
                        ) {
                            ramadanLink = "https://7rusini.com/ZYKrdPW";
                        } else if (
                            extremeWeightLoss >= 1251 &&
                            extremeWeightLoss <= 1350
                        ) {
                            ramadanLink = "https://7rusini.com/gZYDXdj";
                        } else if (
                            extremeWeightLoss >= 1351 &&
                            extremeWeightLoss <= 1450
                        ) {
                            ramadanLink = "https://7rusini.com/PdxWgOg";
                        } else if (
                            extremeWeightLoss >= 1451 &&
                            extremeWeightLoss <= 1550
                        ) {
                            ramadanLink = "https://7rusini.com/lGpXznN";
                        } else if (
                            extremeWeightLoss >= 1551 &&
                            extremeWeightLoss <= 1650
                        ) {
                            ramadanLink = "https://7rusini.com/ydpGyvG";
                        } else if (extremeWeightLoss >= 1651) {
                            ramadanLink = "https://7rusini.com/QdxDREq";
                        }

                        document.getElementById("result").innerHTML = `
                <h3>سعرات الحرارية الموصى بها: </h3>
                <p>للحفاظ على وزنك: ${maintainWeight} سعرة/اليوم</p>
                <p>لخسارة وزن بسيط (0.25 كيلو في الاسبوع) : ${mildWeightLoss} سعرة/اليوم</p>
                <p>لخسارة وزن متوسط (0.5 كيلو في الاسبوع) : ${weightLoss} سعرة/اليوم</p>
                <p class='nd'>لخسارة وزن كبير (1 كيلو في الاسبوع) : ${extremeWeightLoss} سعرة/اليوم</p>
               <div class='resultLinks'>
                <a href='${link}'>للحصول على جدول غذائي لهدف (خفض الوزن) اضغط هنا </a>
                <a href='${ramadanLink}' class='ramadanLinkColor'>لجدول التنحيف لشهر رمضان اضغط هنا </a>
                </div>
              `;
                    });
            }

            /* ================================================================================ */
            /* ================================================================================ */
            /* ================================================================================ */
            /* ================================================================================ */
            /* ================================================================================ *

/* Calculator 2 */
                
            if (window.location.href === "https://7rusini.com/p/OdAYN") {
    targetDiv = document.querySelector(".content-entry");

    if (targetDiv) {
        const formContainer = document.createElement("div");
        formContainer.classList.add("formCont");

        // Step 1: Gender Selection
        const genderDiv = document.createElement("div");
        genderDiv.innerHTML = `
            <h2>الجنس</h2>
            <label><input type="radio" name="gender" value="male"><span>ذكر</span></label>
            <label><input type="radio" name="gender" value="female"><span>أنثى</span></label>
        `;
        formContainer.appendChild(genderDiv);

        // Step 2: Location Selection (initially hidden)
        const locationDiv = document.createElement("div");
        locationDiv.style.display = "none";
        locationDiv.innerHTML = `
            <h2>المكان</h2>
            <label><input type="radio" name="location" value="gym"><span>النادي</span></label>
            <label><input type="radio" name="location" value="home"><span>البيت</span></label>
        `;
        formContainer.appendChild(locationDiv);

        // Step 3: Level Selection (initially hidden)
        const levelDiv = document.createElement("div");
        levelDiv.style.display = "none";
        levelDiv.innerHTML = `
            <h2>المستوى</h2>
            <label><input type="radio" name="level" value="beginner"><span>مبتدئ</span></label>
            <label><input type="radio" name="level" value="intermediate"><span>متوسط</span></label>
            <label><input type="radio" name="level" value="advanced"><span>متقدم</span></label>
        `;
        formContainer.appendChild(levelDiv);

        // Step 4: Days Selection (initially hidden)
        const daysDiv = document.createElement("div");
        daysDiv.style.display = "none";
        daysDiv.innerHTML = `
            <h2>عدد الأيام التمرين في الأسبوع</h2>
            <label><input type="radio" name="days" value="4"><span>4</span></label>
            <label><input type="radio" name="days" value="6"><span>6</span></label>
        `;
        formContainer.appendChild(daysDiv);

        // Step 5: Equipment Selection (initially hidden)
        const equipmentDiv = document.createElement("div");
        equipmentDiv.style.display = "none";
        equipmentDiv.innerHTML = `
            <h2>الأدوات اذا كان التمرين في المنزل</h2>
            <label><input type="radio" name="equipment" value="with"><span>باستخدام الأدوات</span></label>
            <label><input type="radio" name="equipment" value="without"><span>بدون استخدام الأدوات</span></label>
        `;
        formContainer.appendChild(equipmentDiv);

        targetDiv.insertAdjacentElement("afterend", formContainer);

        // Event listeners for gender selection
        const genderRadios = genderDiv.querySelectorAll('input[name="gender"]');
        genderRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.checked) {
                    genderDiv.style.display = "none";
                    locationDiv.style.display = "block";
                }
            });
        });

        // Event listeners for location selection
        const locationRadios = locationDiv.querySelectorAll('input[name="location"]');
        locationRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.checked) {
                    locationDiv.style.display = "none";
                    levelDiv.style.display = "block";
                }
            });
        });

        // Event listeners for level selection
        const levelRadios = levelDiv.querySelectorAll('input[name="level"]');
        levelRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.checked) {
                    levelDiv.style.display = "none";
                    daysDiv.style.display = "block";
                }
            });
        });

        // Event listeners for days selection
        const daysRadios = daysDiv.querySelectorAll('input[name="days"]');
        daysRadios.forEach((radio) => {
            radio.addEventListener("change", function () {
                if (this.checked) {
                    daysDiv.style.display = "none";

                    // Check selected gender and location
                    const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;
                    const selectedLocation = document.querySelector('input[name="location"]:checked')?.value;

                    // Show equipment selection if female and location is home
                    if (selectedGender === "female" && selectedLocation === "home") {
                        equipmentDiv.style.display = "block"; // Show equipment selection
                    } else {
                        displayProgram(); // Skip to display the program
                    }
                }
            });
        });

        // Event listeners for equipment selection (only for females)
        const equipmentRadios = equipmentDiv.querySelectorAll('input[name="equipment"]');
        equipmentRadios.forEach((radio) => {
            radio.addEventListener("change", displayProgram);
        });

        // Function to display the program based on selections
        function displayProgram() {
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const location = document.querySelector('input[name="location"]:checked')?.value;
            const level = document.querySelector('input[name="level"]:checked')?.value;
            const days = document.querySelector('input[name="days"]:checked')?.value;
            const equipment = document.querySelector('input[name="equipment"]:checked')?.value;

            let message = "";
            let link = "https://7rusini.com/vAAXaa"; // Default link

            // Conditions to set message and link

            if (gender === "male" && days === "4") {
                if (location === "gym") {
                    n1 = "جدول شامل في النادي للرجال";
                    l1 = "https://7rusini.com/vAAXaa";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                } else {
                    n1 = "جدول شامل في المنزل للرجال";
                    l1 = "https://7rusini.com/zoovRA";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            if (gender === "male" && days === "6" && level !== "advanced") {
                if (location === "gym") {
                    message = " ٦-٤ اسابيع ثم الانتقال الي";
                    n1 = "جدول شامل في النادي للرجال";
                    l1 = "https://7rusini.com/vAAXaa";
                    n2 = "جدول (دفع - سحب - أرجل) في النادي للرجال";
                    l2 = "https://7rusini.com/RvvAro";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                } else {
                    message = " ٦-٤ اسابيع ثم الانتقال الي";
                    n1 = "جدول شامل في المنزل للرجال";
                    l1 = "https://7rusini.com/zoovRA";
                    n2 = "جدول (دفع - سحب - أرجل) في المنزل للرجال";
                    l2 = "https://7rusini.com/Xzzeaz";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            if (gender === "male" && level === "advanced" && days === "6") {
                if (location === "gym") {
                    l1 = "https://7rusini.com/lqjDpg";
                    n1 = "جدول تمارين مقاومة متقدمة للرجال في النادي";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                } else {
                    l1 = "https://7rusini.com/Xzzeaz";
                    n1 = "جدول تمارين مقاومة متقدمة للرجال في المنزل";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            // Female

            if (gender === "female" && days === "4") {
                if (location === "gym") {
                    l1 = "https://7rusini.com/GqYbNg";
                    n1 = "جدول شامل في النادي للنساء";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                } else {
                    l1 = "https://7rusini.com/ZqYgVW";
                    n1 = "جدول شامل في المنزل للنساء";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            if (gender === "female" && location === "gym" && days === "6") {
                if (level === "beginner") {
                    message = " ٦-٤ اسابيع ثم الانتقال الي";
                    n1 = "جدول شامل في النادي للنساء";
                    l1 = "https://7rusini.com/GqYbNg";
                    n2 = "جدول علوي سفلي في النادي للنساء";
                    l2 = "https://7rusini.com/ABBPAd";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
                if (level === "intermediate") {
                    message = " ٦-٤ اسابيع ثم الانتقال الي";
                    n1 = "جدول شامل في النادي للنساء";
                    l1 = "https://7rusini.com/GqYbNg";
                    n2 = "جدول علوي سفلي في النادي للنساء";
                    l2 = "https://7rusini.com/ABBPAd";
                    n3 = "جدول علوي سفلي أرداف وبطن في النادي للنساء";
                    l3 = "https://7rusini.com/xzbXzG";
                    m2 = " أو";
                }
                if (level === "advanced") {
                    message = " أو";
                    n1 = "جدول علوي سفلي في النادي للنساء";
                    l1 = "https://7rusini.com/ABBPAd";
                    n2 = "جدول علوي سفلي أرداف وبطن في النادي للنساء";
                    l2 = "https://7rusini.com/xzbXzG";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            if (gender === "female" && location === "home") {
                if (equipment === "with" && days === "6") {
                    if (level === "beginner") {
                        message = " ٦-٤ اسابيع ثم الانتقال الي";
                        n1 = "جدول شامل في المنزل للنساء";
                        l1 = "https://7rusini.com/ZqYgVW";
                        n2 = "جدول علوي سفلي في المنزل للنساء";
                        l2 = "https://7rusini.com/EXZvvq";
                        n3= " ";
                        l3 =" ";
                        m2 = " "
                    }
                    if (level === "intermediate") {
                        message = " ٦-٤ اسابيع ثم الانتقال الي";
                        n1 = "جدول شامل في المنزل للنساء";
                        l1 = "https://7rusini.com/ZqYgVW";
                        n2 = "جدول علوي سفلي في المنزل للنساء";
                        l2 = "https://7rusini.com/EXZvvq";
                        n3 = "جدول علوي سفلي أرداف وبطن في المنزل للنساء";
                        l3 = "https://7rusini.com/RqBaXX";
                        m2 = " أو";
                    }
                    if (level === "advanced") {
                        message = " أو";
                        n1 = "جدول علوي سفلي في المنزل للنساء";
                        l1 = "https://7rusini.com/EXZvvq";
                        n2 = "جدول علوي سفلي أرداف وبطن في المنزل للنساء";
                        l2 = "https://7rusini.com/RqBaXX";
                        n3 = " ";
                        l3 = " ";
                        m2 = " ";
                    }
                }
                if (equipment === "with" && days === "4") {
                    n1 = "جدول شامل في المنزل للنساء";
                    l1 = "https://7rusini.com/ZqYgVW";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
                if (equipment === "without") {
                    n1 = "جدول علوي سفلي (بدون أدوات) للنساء";
                    l1 = "https://7rusini.com/jgnnEX";
                    n2 = " ";
                    l2 = " ";
                    message = " ";
                    n3 = " ";
                    l3 = " ";
                    m2 = " ";
                }
            }

            // Display the result
            /*if (message) {*/
                // Check if the resultDiv already exists
                const existingDiv = document.querySelector(".resultCont");
                
                if (!existingDiv) {
                    const resultDiv = document.createElement("div");
                    resultDiv.classList.add("resultCont");
                    resultDiv.innerHTML = `<a href="${l1}">${n1}</a><p>${message}</p><a href="${l2}">${n2}</a><p>${m2}</p><a href="${l3}">${n3}</a>`;
                    formContainer.appendChild(resultDiv);
               /* }*/
            }
        }
    } else {
        console.error("Target div not found.");
    }
}

// Products 

var pro1 = document.createElement('div');
pro1.innerHTML = `
  <salla-products-slider
    source="selected"
    block-title="جداول التمارين الرجالية"
    source-value="[371719224,2055939165,1083304470,430987129,1099641191,1133285137,567451393]">
  </salla-products-slider>
`;

var pro2 = document.createElement('div');
pro2.innerHTML = `
  <salla-products-slider
    source="selected"
    block-title="جداول التمارين النسائية"
    source-value="[1215603171,2055939165,1512885867,1392502101,1172337133,1896405430,1723460774,2083379836]">
  </salla-products-slider>
`;

var existingDiv = document.querySelector('salla-comments');

existingDiv.parentNode.insertBefore(pro1, existingDiv);
existingDiv.parentNode.insertBefore(pro2, pro1.nextSibling);
