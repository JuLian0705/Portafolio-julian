document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita la redirección de Formspree

    const form = event.target;
    const formData = new FormData(form);
    
    // Mostrar animación de carga
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = "block";

    try {
      const response = await fetch("https://formspree.io/f/xblgldea", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        form.reset();
        showSuccessPopup();
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "block";
        }, 5000); // Espera 5 segundos antes de mostrar el mensaje de éxito
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Hubo un problema al enviar el formulario.");
    } finally {
      // Ocultar animación después de 5 segundos
      setTimeout(() => {
        spinner.style.display = "none";
      }, 5000);
    }
});
