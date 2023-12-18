document.addEventListener('DOMContentLoaded', function () {
    var scrollUpButton = document.getElementById('scrollUp');
  
    // Fonction pour gérer le changement de l'opacité en fonction du défilement
    function handleScroll() {
      // Si la position de défilement verticale est supérieure à 100 pixels, affiche le bouton
      if (window.scrollY > 300) {
        scrollUpButton.style.opacity = '1';
      } else {
        scrollUpButton.style.opacity = '0';
      }
    }
  
    // Ajoute un écouteur d'événement de défilement à la fenêtre
    window.addEventListener('scroll', handleScroll);
  
    
  });