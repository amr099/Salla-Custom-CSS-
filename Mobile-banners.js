document.addEventListener('DOMContentLoaded', function () {
      const mobileImages = {
        1: "https://i.ibb.co/NtN9rQT/Group-1000010633.png",
        2: "https://i.ibb.co/RHXK5rG/Group-1000010634.png",
        3: "https://i.ibb.co/VCKpyJQ/Group-1000010635.png",
        4: "https://i.ibb.co/CwN6DDT/4.png",
      5: "https://i.ibb.co/VxPCN2j/Group-1000010637.png",
      };

      // Check if the device width is less than 768px (mobile breakpoint)
      if (window.innerWidth < 768) {
      console.log('here')
        for (let i = 1; i <= 5; i++) {
          // Select nth child of .s-block--fixed-banner
          const banner = document.querySelector(`section:nth-child(${i} of .s-block--fixed-banner) img`);
          if (banner && mobileImages[i]) {
            banner.setAttribute('src', mobileImages[i]);
          }
        }
      }
    });
