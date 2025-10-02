const name = "One Million";
const link = "https://one1million.com/";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".copyright-text p").innerHTML = `
صنع بإتقان في   
<a href="${link}">${name}</a>
`;
});