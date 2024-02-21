function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var result = "";
    
    if (document.getElementById("kelvin").checked) {
      result = (celsius + 275.15) + " Kelvin";
    } else if (document.getElementById("fahrenheit").checked) {
      result = (celsius * 1.8 + 32) + " Fahrenheit";
    }
    
    document.getElementById("result").value = result;
  }