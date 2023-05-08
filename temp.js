document.getElementById("celcius").oninput = function() {
    celcius();
  };
  
  document.getElementById("kelvin").oninput = function() {
    kelvin();
  };
  
  document.getElementById("fahrenheit").oninput = function() {
    fahrenheit();
  };

function celcius(){
    let c = parseFloat(document.getElementById("celcius").value);
    let k = c + 273.15;
    let f = c * 9/5 + 32;
    document.getElementById("kelvin").value = k.toFixed(2);
    document.getElementById("fahrenheit").value = f.toFixed(2);
}
function fahrenheit(){
    let f = parseFloat(document.getElementById("fahrenheit").value);
    let c = (f - 32) * 5/9;
    let k = c + 273.15;
    document.getElementById("celcius").value = c.toFixed(2);
    document.getElementById("kelvin").value = k.toFixed(2);
}
function kelvin(){
    let k = parseFloat(document.getElementById("kelvin").value);
    let c = k - 273.15;
    let f = c * 9/5 + 32;
    document.getElementById("celcius").value = c.toFixed(2);
    document.getElementById("fahrenheit").value = f.toFixed(2);
}