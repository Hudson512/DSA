// Implementacao do algoritmo Counting Sort

function countingSort(arr) {
    let max_value =  Math.max(...arr);
    const count = new Array(max_value + 1).fill(0);

    while (arr.length > 0){
        num = arr.pop(0);
        count[num] += 1;
    }

    for (let index = 0; index < count.length; index++) {
        while (count[index] > 0){
            arr.push(index);
            count[index] -= 1;
        }
    }
    return arr;
}


const my_array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));
//const my_array = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];

console.log(countingSort(my_array));