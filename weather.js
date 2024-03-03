/*
    @name: Assignement1
    @Course Code: SODV1201
    @Program: Software Development Diploma
    @Author: Anthony Half
*/

var Fahrenheit = parseFloat(document.getElementById("temp").value);
var Celsius = 5 / 9 * (Fahrenheit - 32);
var Kelvin = Celsius + 273.15;

function convertToCelsius() {
    document.getElementById("celsius").innerHTML = "F to C: " + Celsius.toFixed(2) + "&deg";
}

function celsiusToKelvin() {
    document.getElementById("kelvin").innerHTML = Kelvin.toFixed(2);
}