const existingBanner = document.querySelector('.banner-entry');

if (existingBanner) {
  const newBanner = existingBanner.cloneNode(true);

  // Update the link and image
  newBanner.href = 'https://example.com'; 
  const innerDiv = newBanner.querySelector('div.lazy__bg');

  const newImage = 'https://i.ibb.co/wqNwJFb/Frame-1820549171-1.png'; 

  innerDiv.setAttribute('data-bg', newImage);
  innerDiv.style.backgroundImage = `url("${newImage}")`;

  existingBanner.parentElement.appendChild(newBanner);
}
