function showSuccessPopup() {
    // Mostrar el loader primero
    document.getElementById("loadingSpinner").style.display = "flex";

    // Esperar 5 segundos antes de mostrar el popup
    setTimeout(() => {
        document.getElementById("loadingSpinner").style.display = "none"; // Ocultar loader
        document.getElementById("successPopup").style.display = "flex"; // Mostrar popup
    }, 5000);
}

// Cerrar el popup cuando se hace clic en la "X"
document.querySelector(".close-popup").addEventListener("click", function() {
    document.getElementById("successPopup").style.display = "none";
});
