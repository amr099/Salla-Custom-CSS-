setTimeout(function () {
  const selectElement = document.querySelector('select');
  selectElement.style.display = 'block';
  convertDropdownsToRadios();
   addBorderChangeEvent();
}, 3000);

document.querySelector('select').addEventListener('mousedown', function (event) {
  event.preventDefault();
  let selectedIndex = this.selectedIndex;
  let optionText = this.options[selectedIndex].text;
  alert('Selected: ' + optionText);
});

function convertDropdownsToRadios() {

    const dropdownContainers = document.querySelectorAll('.s-product-options-option-content');

    dropdownContainers.forEach(container => {

        const dropdown = container.querySelector('select.s-form-control');

        if (dropdown) {
            const radioContainer = document.createElement('div');
            radioContainer.className = 'radio-container';

            Array.from(dropdown.options).forEach(option => {
                if (option.value) { 
                    const label = document.createElement('label');
                    label.className = 'radio-label';

                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = dropdown.name;
                    radio.value = option.value;
                    radio.required = dropdown.required;
                    radio.checked = option.selected;

                    label.textContent = option.text;
                    label.prepend(radio);
radioContainer.appendChild(label);
                }
            });

            container.replaceChild(radioContainer, dropdown.parentElement);
        }
    });
}

function addBorderChangeEvent() {
    const radioLabels = document.querySelectorAll('.radio-label');

    radioLabels.forEach(label => {
        label.addEventListener('click', () => {
            radioLabels.forEach(otherLabel => {
                otherLabel.style.borderColor = '#ccc';
            });
            label.style.borderColor = 'green';
        });
    });
}