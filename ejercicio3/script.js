function agregar() {
  let lista = document.getElementById("lista");
  let input = document.getElementById("textarea").value;
  const elementoLista = document.createElement("li");
  elementoLista.textContent = input;

  const button = document.createElement("button");
  button.textContent = "delete";
  elementoLista.appendChild(button);

  lista.appendChild(elementoLista);

  button.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
