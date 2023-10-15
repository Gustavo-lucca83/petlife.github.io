var elementoDuvida = document.querySelectorAll(".duvidas");

elementoDuvida.forEach(function (duvidas) {
  duvidas.addEventListener("click", function () {
    duvidas.classList.toggle("ativa");
  });
});
