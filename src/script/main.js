let inputs = document.querySelectorAll(".inputs");

function verificarInputs() {
  for (let input of inputs) {
    if (input.value === "") {
      alert("Preencher todos os campos");
      return;
    }
  }
  alert("Mensagem enviada com sucesso");
}

document
  .querySelector("button[type='submit']")
  .addEventListener("click", function (event) {
    event.preventDefault();
    verificarInputs();
  });
