/* Add Lazy Loading */

const images = document.querySelectorAll('img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});

/* Meta Edits */

var metaTag = document.querySelector('meta[name="viewport"]');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');

const hreflangTag = document.querySelector('link[rel="alternate"][hreflang="ind"]');
if (hreflangTag) {
  hreflangTag.setAttribute('hreflang', 'id-ID');
  hreflangTag.setAttribute('href', 'https://coffeereins.com/id/');
} else {
  const link = document.createElement('link');
  link.setAttribute('rel', 'alternate');
  link.setAttribute('hreflang', 'id-ID');
  link.setAttribute('href', 'https://coffeereins.com/id/');
  document.head.appendChild(link);
}


/* Add width and Height for Logos */
const logos = document.querySelectorAll('img[ alt="مقاليد البن"]');
logos.forEach(logo => {
  logo.setAttribute('width', '200px');
  logo.setAttribute('height', '141px');
});

document.querySelector(".logo-normal").alt = "main-logo";


/* Accessability */

const parentElement = document.querySelector('.animated-text__inner[aria-hidden="true"]');
const childLinks = parentElement.querySelectorAll('a');
if (parentElement && parentElement.getAttribute('aria-hidden') === 'true') {
  childLinks.forEach(link => {
    link.setAttribute('tabindex', '-1');
  });
}

const links = document.querySelectorAll('a.absolute.w-full.h-full.inset-0');
links.forEach(link => {
  if (!link.hasAttribute('aria-label')) {
    const categoryId = link.href.split('/').pop();
    const ariaLabelText = `Visit Category ${categoryId}`;
    link.setAttribute('aria-label', ariaLabelText);
  }
});