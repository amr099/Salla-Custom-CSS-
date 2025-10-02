/* Popup */

window.onload = function() {
    // Create overlay element
    var overlay = document.createElement('div');
    overlay.id = 'overlay';

    // Create popup div
    var popup = document.createElement('div');
    popup.className = 'popup';

    // Create close button
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = 'x';
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };



    // Create heading
    var heading = document.createElement('h2');
    heading.textContent = 'ابدأ الحديث معنا على واتساب';

    // Create description
    var description = document.createElement('p');
    description.textContent = 'يسعدنا التواصل معك من خلال واتساب !';



    // Create button
    var whatsappButton = document.createElement('button');
    whatsappButton.textContent = 'تواصل معنا على واتساب';
    whatsappButton.onclick = function() {
        var phoneNumber = '966594057090'; // Replace with your WhatsApp number
        var message = 'Hello! I want to chat with you.'; // Customize your message

        var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
        window.open(url, '_blank');
        document.body.removeChild(overlay);
    };

    // Append elements to popup
    popup.appendChild(closeButton);

    popup.appendChild(heading);
    popup.appendChild(description);

    popup.appendChild(whatsappButton);

    // Append popup to overlay
    overlay.appendChild(popup);

    // Append overlay to document body
    document.body.appendChild(overlay);
};

/* css 

#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    text-align: center;
    animation: fadeInDown 0.5s ease-out;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #999;
}

h2 {
    font-family: Arial, sans-serif;
    color: #333;
    margin-bottom: 15px;
}

p {
    color: #666;
    margin-bottom: 20px;
}

button {
    background-color: #25D366;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #128C7E;
}

*/