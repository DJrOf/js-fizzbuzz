//Fizzbuzz

// 1 Stampare in console i numeri da 1 - 100
// 2a Per ogni i = x * 3, stampare "Fizz" invece che il numero
// 2b Per ogni i = x * 5, stampare "Buzz" invece che il numero
// 2c Per ogni i = x * 3 = x * 5, stampare "Fizzuzz" invece che il numero

for (let i = 1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // 2c Per ogni i = x * 3 = x * 5, stampare "Fizzuzz" invece che il numero
        console.log('Fizzbuzz')
    } else if (i % 3 === 0){
        // 2a Per ogni i = x * 3, stampare "Fizz" invece che il numero
        console.log('Fizz')
    } else if (i % 5 === 0){
        // 2b Per ogni i = x * 5, stampare "Buzz" invece che il numero
        console.log('Buzz')
    } else {
        // 1 Stampare in console i numeri da 1 - 100
        console.log(i)
} 
}
