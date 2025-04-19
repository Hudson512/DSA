//let my_array = [64, 34, 25, 5, 22, 11, 90, 12]; 
// Calcular o tempo de execução do algoritmo de ordenação Selection Sort



const my_array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
len = my_array.length;

// function selectionSort(arr) {
//     for (let i = 0; i < len; i++) {
//         let min = i;
//         let status = false;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//                 status = true;
//             }
//         }
//         if (!status) {
//             continue;
//         }
//         let temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;
//     }
//     return arr;
// }

function selectionSort(arr) {
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
       
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

let start = performance.now();
console.log(selectionSort(my_array));
let end = performance.now();

console.log(`Execution time: ${end - start} milliseconds`);
