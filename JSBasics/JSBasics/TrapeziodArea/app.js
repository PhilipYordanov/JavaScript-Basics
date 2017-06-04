function TrapeziodArea([args1, args2, args3]) {
    let b1 = parseFloat(args1);
    let b2 = parseFloat(args2);
    let h = parseFloat(args3);
    let area = ((b1 + b2) * h) / 2;
    console.log("Trapeziod area = " + area);
}

TrapeziodArea(["5","6","7"])
