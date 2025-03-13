document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que el formulario se recargue

        // Obtener valores del formulario
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");

        if (!nameField || !emailField || !messageField) {
            console.error("No se encontraron los campos del formulario.");
            return;
        }

        // Obtener valores de los campos
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if (!name || !email || !message) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Crear objeto con los datos
        const formData = { name, email, message };

        try {
            const response = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            console.log("Respuesta del servidor:", result);

            if (response.ok) {
                alert("Mensaje enviado con éxito.");
                document.getElementById("contactForm").reset(); // Limpia el formulario
            } else {
                alert("Error: " + (result.error || "No se pudo enviar el mensaje."));
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un problema al enviar el mensaje.");
        }
    });
});