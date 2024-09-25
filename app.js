function validateForm() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const mensagem = document.getElementById("mensagem").value;

  // Basic validation for required fields
  if (!nome || !email || !whatsapp || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  // Additional validation for email format (optional)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  // Additional validation for WhatsApp format (optional)
  const whatsappRegex = /^\+55[1-9]{2}[0-9]{8}$/;
  if (!whatsappRegex.test(whatsapp)) {
    alert("Por favor, insira um número de WhatsApp válido no formato +55XXYYYYYYYY.");
    return false;
  }

  // You can add more validation rules here as needed.

  return true;
}

function mostrarModal() {
  document.getElementById("myModal").style.display = "block";
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    // If validation passes, submit the form data to the server
    const formData = new FormData(form);
    fetch('your-server-endpoint', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Handle the server response here
        console.log(data);
        mostrarModal(); // Show the modal after successful submission
      })
      .catch(error => {
        // Handle errors here
        console.error(error);
      });
  }
});