document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const status = document.getElementById("mensagem-status");

  if (!nome || !email || !mensagem) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = "Digite um e-mail válido.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "green";

  // Opcional: limpar os campos
  document.getElementById("formulario").reset();
});
