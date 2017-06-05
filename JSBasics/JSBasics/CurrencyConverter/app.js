function currencyConverter([args0, args1, args2]) {

    let moneyToConvert = parseFloat(args0);
    let firstCurrency = args1;
    let secondCurrency = args2;

    let currency = {};
    currency["BGN"] = 1;
    currency["USD"] = 1.79549;
    currency["EUR"] = 1.95583;
    currency["GBP"] = 2.53405;

    let result = moneyToConvert * (currency[firstCurrency] / currency[secondCurrency]);

    console.log(result.toFixed(2) + " " + secondCurrency);
}

currencyConverter(["20", "USD", "BGN"]);