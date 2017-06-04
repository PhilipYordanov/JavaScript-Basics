function triangleArea([args1, args2]) {

    let a = parseFloat(args1);
    let h = parseFloat(args2);

    let area = (a * h / 2).toFixed(2);
    console.log("Triangle area = " + area);
}

triangleArea(["20", "30"]);
