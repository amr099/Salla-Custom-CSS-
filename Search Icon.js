document.addEventListener("DOMContentLoaded", function () {
  const newSrc =
    "https://cdn.files.salla.network/homepage/632614970/c5d8aad8-11ab-413a-babb-071d628418a6.webp";

  const setAvatar = () => {
    const img = document.querySelector(".s-user-menu-trigger-avatar");
    if (img) {
      img.src = newSrc;
      return true;
    }
    return false;
  };

  if (!setAvatar()) {
    const observer = new MutationObserver(() => {
      if (setAvatar()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
});





if (location.pathname.includes("/ar/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7/page-1531589519")) {
    const iframe = document.createElement("iframe");
    iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.647422548614!2d50.047490700000004!3d26.467091699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e34e7c20892f%3A0x47ea5b165fdb8acb!2zSGFqYXIgRGVsaWdodHMgLSBEYXRlIENob2NvbGF0ZSB8INmH2KzYsSDYr9mK2YTYp9mK2KrYsyAtINi02YjZg9mI2YTYp9iq2Kkg2KjYp9mE2KrZhdix!5e0!3m2!1sen!2seg!4v1769253382716!5m2!1sen!2seg";

    iframe.height = "450";
    iframe.style.border = "0";
    iframe.style.marginTop = "3rem";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    const footer = document.querySelector("footer");
    if (footer) {
        footer.parentNode.insertBefore(iframe, footer);
    }

    // Load FontAwesome for icons
    var fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
    document.head.appendChild(fontAwesomeLink);

    // Google Tag Manager (unchanged)
    (function () {
        var script = document.createElement("script");
        script.innerHTML =
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N36BWD87');";
        document.head.appendChild(script);
    })();

    // Google Tag Manager NoScript fallback (unchanged)
    (function () {
        var noscriptTag = document.createElement("noscript");
        var iframeTag = document.createElement("iframe");
        iframeTag.src =
            "https://www.googletagmanager.com/ns.html?id=GTM-N36BWD87";
        iframeTag.height = "0";
        iframeTag.width = "0";
        iframeTag.style.display = "none";
        iframeTag.style.visibility = "hidden";
        noscriptTag.appendChild(iframeTag);
        document.body.appendChild(noscriptTag);
    })();
}
salla.onReady(() => {
  // Find the target div with the specified class structure
  const targetDiv = document.querySelector('.inner > .container > .flex > .flex + .flex');
  
  // Check if the target div exists
  if (targetDiv) {
    // Create the button element
    const searchButton = document.createElement('button');
    searchButton.className = 'aspect-square header-search-btn ';
    searchButton.setAttribute('onclick', "salla.event.dispatch('search::open')");
    
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('fill', 'none');
    
    // Create the path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 20L28 28M13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667Z');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    
    // Assemble the SVG
    svg.appendChild(path);
    
    // Assemble the button
    searchButton.appendChild(svg);
    
    // Add the button to the target div
    targetDiv.appendChild(searchButton); 
  } else {
  }
});
