/*
    Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
    Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    Debe imprimir ambos resultados por consola o por el DOM.
    Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.*/
    function convertirTemperatura() {
        let celsius = parseInt(prompt("Ingrese temperatura en grados Celsius:"));
      
        if (isNaN(celsius)) {
          alert("ingrese solo dígitos.");
          return;
        }
      
        let fahrenheit = (celsius * 9 / 5) + 32;
        let kelvin = celsius + 273.15;
      
  
        document.getElementById("celsius").textContent = `${celsius} °C`;
        document.getElementById("fahrenheit").textContent = `${fahrenheit.toFixed(2)} °F`;
        document.getElementById("kelvin").textContent = `${kelvin.toFixed(2)} K`;
      }
      

      document.getElementById("convertButton").addEventListener("click", convertirTemperatura);