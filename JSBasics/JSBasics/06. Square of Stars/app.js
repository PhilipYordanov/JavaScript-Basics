function SquareOfStars([args1]) {
    let n = Number(args1);
    let star = '*';
    let space = ' ';

    console.log(star.repeat(n));

    for (var i = 1; i <= n - 2; i++) {
        console.log(star + space.repeat(n-2) + star);
    }

    console.log(star.repeat(n));
}
SquareOfStars(["4"]);
