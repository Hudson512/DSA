// Array de numeros aleatorios
const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
console.log(randomNumbers);

let lowerValue = randomNumbers[0];
let lowerIndex = 0; 

for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < lowerValue) {
        lowerValue = randomNumbers[i];
        lowerIndex = i;
    }
}
console.log(`O valor mais baixo no array é: ${lowerValue} e está na posição: ${lowerIndex}`);