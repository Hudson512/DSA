// Insertion Sort: implementacao em js

let my_array = [64, 34, 25, 5, 22, 11, 90, 12];

let len = my_array.length;

function insertionSort(arr) {
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(my_array));

