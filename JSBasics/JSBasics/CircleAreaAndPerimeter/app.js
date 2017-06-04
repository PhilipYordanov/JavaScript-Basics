function CircleAreaAndPerimeter([args1]) {
    let r = parseFloat(args1);
    let area = (Math.PI * r * r);
    let perimeter = (2 * Math.PI * r);

    console.log("Area = " + area);
    console.log("Perimeter = " + perimeter);
}

CircleAreaAndPerimeter(["3"])
