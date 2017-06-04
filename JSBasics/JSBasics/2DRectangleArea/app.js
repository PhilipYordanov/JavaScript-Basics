function TwoDrectangle_Area_Parameter([args1, args2, args3, args4]) {
    var x1 = parseFloat(args1);
    var y1 = parseFloat(args2);
    var x2 = parseFloat(args3);
    var y2 = parseFloat(args4);

    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);

    console.log("Area = " + (width * height));
    console.log("Perimeter = " + (2 * (width + height)));
}

TwoDrectangle_Area_Parameter(["600.25", "500.75", "100.50", "-200.5"]);


