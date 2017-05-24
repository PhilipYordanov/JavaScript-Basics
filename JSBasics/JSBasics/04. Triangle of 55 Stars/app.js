function starsTriangle() {
    let star = '*';
    let i = 1;
    
    while (i < 11) {
        console.log(star.repeat(i));
        ++i;
    }
}

starsTriangle()
