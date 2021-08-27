window.addEventListener("load", function () {
  const radiobutton = document.getElementsByName("option");
  let value = document.getElementById("input");

  // Cambiar el valor del placeholder en base al radio button seleccionado
  radiobutton[0].addEventListener("change", function () {
    value.setAttribute("placeholder", "Introduce un número decimal");
    clear();
  });
  radiobutton[1].addEventListener("change", function () {
    value.setAttribute("placeholder", "Introduce un número binario");
    clear();
  });

  // Añadir un evento de clic al boton basado en el radio button seleccionado
  document.getElementById("btn").addEventListener("click", function () {
    if (radiobutton[0].checked) {
      convertToBinary();
    } else if (radiobutton[1].checked) {
      convertToDecimal();
    }
  });
});

// Func de conversión de decimal a binario
function convertToBinary() {
  let result = document.getElementById("result");
  let value = document.getElementById("input").value;
  let decimalToNumber, decimalToBinary;

  if (value === "") {
    alert("Please, enter a number");
  } else {
    decimalToNumber = parseInt(value);
    decimalToBinary = decimalToNumber.toString(2);

    result.innerHTML = `${decimalToBinary}`;
  }
}

// Func de conversión de binario a decimal
function convertToDecimal() {
  let result = document.getElementById("result");
  let value = document.getElementById("input").value;
  let decimalToNumber, binaryToDecimal;

  if (value === "") {
    alert("Please, enter a number");
  } else {
    decimalToNumber = parseInt(value);
    binaryToDecimal = parseInt(decimalToNumber, 2);

    result.innerHTML = `${binaryToDecimal}`;
  }
}

// Func para limpiar el placeholder del input y el contenido de resultado
function clear() {
  document.getElementById("input").value = "";
  document.getElementById("result").textContent = "";
}
