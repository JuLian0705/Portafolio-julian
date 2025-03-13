document.querySelector(".form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.querySelector('input[placeholder="Nombre"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Mensaje"]').value;
  
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
  
    const result = await response.json();
    alert(result.message);
  });
  