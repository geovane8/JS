n = 0;

while (true) {
    n += 3;

    if (n % 2 === 0) {
        continue;
    }
    console.log(n);

    if (n % 11 === 0) {
        break;
    }
}