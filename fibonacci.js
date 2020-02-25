/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
function fibo(z, a, b) {
    let y = b;
    console.log(a);
    b += a;
    if (z >= a)
        return a;
    a = fibo(z, a, b);
    return a;
}
console.log(fibo(30, 0, 1));