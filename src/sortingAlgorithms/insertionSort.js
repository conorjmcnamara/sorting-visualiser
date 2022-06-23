export function insertionSortAnimation(array) {
    const copyArray = array.slice();
    const arrayToAnimate = [];

    if(array.length <= 1) return array;

    insertionSort(copyArray, arrayToAnimate);
    return arrayToAnimate;
}

function insertionSort(array, arrayToAnimate) {
    // iterate up the array and grow the sorted list behind it
    for(let i = 1; i < array.length; i++) {
        arrayToAnimate.push([[i], true]);
        let currentValue = array[i] // first element in the unsorted array
        let j = i - 1;

        // loop backwards and compare currentValue to those elements before it
        // shift elements greater than currentValue to one position ahead of their current position
        while((j >= 0) && (array[j] > currentValue)) {
            arrayToAnimate.push([[j, j + 1, i], true]);
            array[j + 1] = array[j];
            arrayToAnimate.push([[j + 1, array[j]], false]);
            j--;
        }

        array[j + 1] = currentValue;
        arrayToAnimate.push([[j + 1, currentValue], false]);
    }
}
