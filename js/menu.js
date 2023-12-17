document.addEventListener('DOMContentLoaded', function() {
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(function(submenu) {
      submenu.addEventListener('click', function(event) {
        // Fermer tous les autres sous-menus
        submenus.forEach(function(otherSubmenu) {
          if (otherSubmenu !== submenu) {
            otherSubmenu.querySelector('.sub-menu').classList.remove('show');
          }
        });

        // Basculer l'affichage du sous-menu actuel
        this.querySelector('.sub-menu').classList.toggle('show');

        // Empêcher la propagation du clic pour éviter la fermeture immédiate
        event.stopPropagation();
      });
    });

    // Ajouter un écouteur de clic sur le document pour fermer les sous-menus
    document.addEventListener('click', function() {
      submenus.forEach(function(submenu) {
        submenu.querySelector('.sub-menu').classList.remove('show');
      });
    });
  });