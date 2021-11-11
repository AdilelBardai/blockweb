// // JavaScript Document
//Hamburger Menu
var hamburgerButton = document.getElementById("hamburger-menu-btn");
var hamburgerMenu = document.getElementById("hamburger-menu");
var closeMenu = document.getElementById("closeMenu");

function showHamburgerMenu() {
  hamburgerMenu.style.display = 'block';
}

closeMenu.addEventListener("click", function () {
  hamburgerMenu.style.display = 'none';
});

hamburgerButton.addEventListener("click", showHamburgerMenu);
//


//Darkmode
var allSections = document.querySelectorAll("section");
var allPelements = document.querySelectorAll("p");
var allH2lements = document.querySelectorAll("h2");
var allAelements = document.querySelectorAll("a");
var allBelements = document.querySelectorAll("b");
var allDivelements = document.querySelectorAll("div");
var allButtons = document.querySelectorAll("button");
var allImages = document.querySelectorAll("img");
var darkmodeBtn = document.getElementById("dark-mode-btn");


darkmodeBtn.addEventListener("click", function () {
  allSections.forEach((section) => {
    section.style.backgroundColor = 'black';
  });

  allPelements.forEach((p) => {
    p.style.color = 'white';
  });

  allH2lements.forEach((h2) => {
    h2.style.color = 'white';
  });

  allAelements.forEach((a) => {
    a.style.color = 'white';
  });

  allBelements.forEach((b) => {
    b.style.color = 'gray';
  });

  allDivelements.forEach((div) => {
    div.style.backgroundColor = 'black';
  });

  allButtons.forEach((button) => {
    button.style.backgroundColor = 'gray';
  });

  allImages.forEach((img) => {
    img.style.backgroundColor = 'white';
  });
});
