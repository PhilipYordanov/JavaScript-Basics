function radiansToDegrees([args1]) {

    let a = parseFloat(args1);
    let result = (a * 180) / Math.PI;
    console.log(result.toFixed(2));
}

radiansToDegrees(["3.1416"]);
