// Déclaration de la fonction toggle menu
function toggleMenu() {
  // Permet de séléctioner un élément dans nav
  var nav = document.querySelector("nav");
  // Sélection la liste header
  var headerList = document.querySelector(".headerlist");

 {
    // Ajouter/retirer la classe la liste
    nav.classList.toggle("menuopen");
    headerList.classList.toggle("menuopen");

    // Pour l'animation qui marche a moitié :c
    if (headerList.classList.contains("menuopen")) {
      headerList.style.maxHeight = headerList.scrollHeight + "px";
    } else {
      headerList.style.maxHeight = null;
    }
  };

  //Les barres
  var bars = document.querySelectorAll(".bar");
  bars.forEach(function (bar) {
    bar.classList.toggle("menuopen");
  });
}
//Faut mettre la page en "max-width: 1000px" (format téléphone)