document.addEventListener("DOMContentLoaded", function () {

  // Sélectionne éléments du formulaire
  let form = document.querySelector("#my-form");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let age = document.querySelector("#age");
  let pays = document.querySelector("#country");
  let errors = document.querySelector(".errors");
  let body = document.querySelector("body");
  let email = document.querySelector("#email");
  let addresse = document.querySelector("#adresse");
  let motdepasse = document.querySelector("#mdp");
  let confirmemotdepasse = document.querySelector("#v-mdp");
  let ville = document.querySelector("#ville");
  let formHeader = document.querySelector(".header");

  //écoute événements pour la soumission du formulaire
  form.addEventListener("submit", function (event) {
    // Empêche rechargement de la page
    event.preventDefault();
    // réinitialiser la section des erreurs
    errors.innerHTML = "";

    // validation du prénom
    if (firstName.value.length <= 2) { // si en dessous de 2 ou égale mettre en fond rouge et ajouter le message d'erreur
      firstName.style.backgroundColor = "red";
      // ajouter un message d'erreur 
      errors.innerHTML +=
        "<div>Veuillez renseigner un prénom avec deux caractères minimum.</div>";
    } else {
      // mettre en surbrillance en vert si la validation est réussie
      firstName.style.backgroundColor = "green";
    }

    // validation du nom
    if (lastName.value.length <= 2) { 
      lastName.style.backgroundColor = "red";
      // Même que 28
      errors.innerHTML +=
        "<div>Veuillez renseigner un nom avec deux caractères minimum.</div>";
    } else {
      lastName.style.backgroundColor = "green";
    }

    // validation de l'âge
    if (age.value < 18 || age.value > 70) {
      age.style.backgroundColor = "red";
      // Même que 28
      errors.innerHTML +=
        "<div>Veuillez renseigner un âge entre 18 et 70 ans.</div>";
    } else {
      //surbillance vert
      age.style.backgroundColor = "#green";
    }

    // Validation du pays
    if (pays.value === "null") {
      pays.style.backgroundColor = "red";
      errors.innerHTML +=
        "<div>Veuillez sélectionner un pays dans la liste.</div>";
    } else {
      pays.style.backgroundColor = "green";
    }

    // Validation de la ville
    if (ville.value.length <= 2) {
      ville.style.backgroundColor = "red";
      errors.innerHTML +=
        "<div>Veuillez entrer une ville avec deux caractères minimum.</div>";
    } else {
      ville.style.backgroundColor = "green";
    }

   // fonction de validation de l'e-mail 
   function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // trouver sur internet, qui permet d'empécher les erreurs qu'on fait le plus souvent quand on rentre un email
    return emailRegex.test(email);
  }
    // validation de l'adresse e-mail
    if (!isValidEmail(email.value)) {
      email.style.backgroundColor = "red";
      errors.innerHTML +=
        "<div>Veuillez entrer une adresse e-mail valide.</div>";
    } else {
      email.style.backgroundColor = "green";
    }

 

    // Validation de l'adresse
    if (addresse.value.length < 5 || addresse.value.length > 50) {
      addresse.style.backgroundColor = "red";
      errors.innerHTML +=
        "<div>Veuillez entrer une adresse de 5 à 50 caractères.</div>";
    } else {
      addresse.style.backgroundColor = "green";
    }

   // Foncton de validation des caractères alphanumériques
   function containsAlphanumeric(input) {
    const alphanumeriqueRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/; //
    return alphanumeriqueRegex.test(input);
  }
    // validation du mot de passe
    if (motdepasse.value.length < 6 || !containsAlphanumeric(motdepasse.value)) {
      motdepasse.style.backgroundColor = "red";
      errors.innerHTML +=
        "<div>Le mot de passe doit contenir au moins 6 caractères alphanumériques.</div>";
    } else {
      motdepasse.style.backgroundColor = "green";
    }

    // Validtion de la correspondance des mots de passe
    if (motdepasse.value !== confirmemotdepasse.value) {
      confirmemotdepasse.style.backgroundColor = "red";
      errors.innerHTML += "<div>Les mots de passe ne correspondent pas.</div>";
    } else {
      confirmemotdepasse.style.backgroundColor = "green";
    }

 

    // si aucune erreur, cacher le formulaire et afficher un message de confirmation
    if (errors.innerHTML === "") {
      form.style.display = "none"; //Permet la disparition du formulaire
      formHeader.style.display = "none";//Permet la disparition du form "Formulaire de renseignement"
      let confirmationMessage = document.createElement("p");
      confirmationMessage.textContent = "Formulaire envoyé !";
      body.appendChild(confirmationMessage);
    }

    // réinitialiser le formulaire
    form.reset();
  });
});

