document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".inputs");
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let preencher = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        preencher = false;
      }
    });

    if (!preencher) {
      alert("Favor preencher todos os campos");
    } else {
      alert("Mensagem enviada");
    }
  });
});
