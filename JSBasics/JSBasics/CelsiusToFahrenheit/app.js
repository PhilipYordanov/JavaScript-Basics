function celsiusToFahrenheit([args1]) {
    let a = parseFloat(args1);

    let fahren = a * 1.8 + 32;;
    console.log(fahren.toFixed(2));
}

celsiusToFahrenheit(["25"]);
