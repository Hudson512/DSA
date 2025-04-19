// QuickSort rescursive implementation

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// Test the quickSort function
const my_array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
//console.log(quickSort(my_array));


// Calculate the execution time of the quickSort algorithm
let start = performance.now();
console.log(quickSort(my_array));
let end = performance.now();
console.log(end - start);