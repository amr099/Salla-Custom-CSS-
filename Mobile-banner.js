document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 768) {
    console.log('here');

    // Select the first image inside the first .s-block
    let banner = document.querySelector('.s-block:nth-of-type(1) img');
    console.log(banner);

    if (banner) {
      banner.src = 'https://cdn.salla.sa/form-builder/jZ825tQaA2RorDPP86E5GLcjI8eQEmVP6u9AgeiP.png';
    }
  }
});
