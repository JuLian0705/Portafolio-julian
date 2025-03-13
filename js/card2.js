document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".custom-card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          card.classList.add("visible");
        }
      });
    }, { threshold: 0.3 }); 
  
    observer.observe(card);
  });
  
  