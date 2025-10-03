const iframe = document.createElement("iframe");
iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.8420041507006!2d46.7531394!3d24.594648300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09aecba1d25f%3A0x11fe801beb61fe4c!2z2KzZiNin2LHYrw!5e0!3m2!1sar!2seg!4v1736703431080!5m2!1sar!2seg";
iframe.width = "600";
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
    iframeTag.src = "https://www.googletagmanager.com/ns.html?id=GTM-N36BWD87";
    iframeTag.height = "0";
    iframeTag.width = "0";
    iframeTag.style.display = "none";
    iframeTag.style.visibility = "hidden";
    noscriptTag.appendChild(iframeTag);
    document.body.appendChild(noscriptTag);
})();
