function ConcatenateData([args1, args2, args3, args4]) {
    let firstName = args1;
    let lastname = args2;
    let age = parseInt(args3);
    let city = args4;
    console.log("You are " + firstName+" " + lastname + ", a " + age + "-years old person from " + city+".");
}

ConcatenateData (["Filip","Yordanov","asd","Pernik"])