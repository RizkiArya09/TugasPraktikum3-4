function fibonacci(nomor) {
    if (nomor < 2) {
        return nomor;
    } else {
        return fibonacci(nomor - 1) + fibonacci(nomor - 2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i)); //mencetak deret fibonacci 10
}