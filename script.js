document.addEventListener("DOMContentLoaded", function() {
    var btnRetourHaut = document.getElementById("btnRetourHaut");

    window.onscroll = function() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        btnRetourHaut.style.display = "block";
    } else {
        btnRetourHaut.style.display = "none";
    }
    };

    btnRetourHaut.addEventListener("click", function() {
      scrollToTop(500); // Durée de l'animation : 500 millisecondes (0.5s)
    });

    function scrollToTop(duration) {
    var start = window.pageYOffset;
    var startTime = performance.now();

    function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var timeElapsed = currentTime - startTime;
        var scrollTo = Math.max(start - timeElapsed / duration * start, 0);

        window.scrollTo(0, scrollTo);

        if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".image-hidden");

    window.addEventListener("scroll", function() {
      var delay = 250; // Délai initial entre chaque image (en millisecondes)

    images.forEach(function(image) {
        // Position du haut de l'image par rapport au haut de la fenêtre
        var imageTop = image.getBoundingClientRect().top;

        // Si l'image est dans la fenêtre
        if (imageTop < window.innerHeight) {
        setTimeout(function() {
            // Ajoute une classe pour afficher l'image avec un délai
            image.classList.add("image-visible");
        }, delay);

          delay += 200; // Augmente le délai pour la prochaine image
        }
    });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container-section2");

    window.addEventListener("scroll", function() {
      // Position du haut du conteneur par rapport au haut de la fenêtre
    var containerTop = container.getBoundingClientRect().top;

      // Si le conteneur est dans la fenêtre
    if (containerTop < window.innerHeight) {
        container.style.transform = "translateX(0)"; // Fait apparaître le conteneur en le déplaçant vers la droite
    }
    });
});
