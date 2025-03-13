document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    function checkScroll() {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          card.classList.add("show");
        } else {
          card.classList.remove("show"); // Ocultar si no está en la vista
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar al cargar la página
  });
  