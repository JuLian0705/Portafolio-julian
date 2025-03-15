function showSuccessPopup() {
    document.getElementById("successPopup").style.display = "flex";
  }

  document.querySelector(".close-popup").addEventListener("click", function() {
    document.getElementById("successPopup").style.display = "none";
  });