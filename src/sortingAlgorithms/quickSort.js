export function quickSortAnimation(array) {
    const copyArray = array.slice();
    const arrayToAnimate = [];
    if (array.length <= 1) return array;

    quickSort(copyArray, 0, array.length - 1, arrayToAnimate);
    return arrayToAnimate;
}

// function that recursively performs Quick Sort
function quickSort(array, start, end, arrayToAnimate) {
    if (start < end) {
        const partitionIndex = quickSortPartition(array, start, end, arrayToAnimate); // index returned from partition
        quickSort(array, start, partitionIndex - 1, arrayToAnimate); // sort the left partition
        quickSort(array, partitionIndex + 1, end, arrayToAnimate); // sort the right partition
    }
}

// Hoare partition scheme
function quickSortPartition(array, start, end, arrayToAnimate) {
    let leftIndex = start;
    let rightIndex = end + 1;
    const pivot = array[start]; // first element

    while (true) {
        // ascend from the left hand side
        // find a value greater than the pivot
        while (array[++leftIndex] < pivot) {
            if (leftIndex === end) break;
            arrayToAnimate.push([[leftIndex], true]);
        }

        // descend from the right hand side
        // find a value less than the pivot
        while (array[--rightIndex] > pivot) {
            if (rightIndex === start) break;
            arrayToAnimate.push([[rightIndex], true]);
        }

        // if the left and right indicies cross, swap their elements
        if (leftIndex < rightIndex){
            arrayToAnimate.push([[leftIndex, array[rightIndex]], false]);
            arrayToAnimate.push([[rightIndex, array[leftIndex]], false]);
            swap(array, leftIndex, rightIndex);
        }

        else {
            break;
        }
    }
    arrayToAnimate.push([[start, array[rightIndex]], false]);
    arrayToAnimate.push([[rightIndex, array[start]], false]);

    swap(array, start, rightIndex);
    return rightIndex;
 }

 // function that swaps elemments at certain indicies of an array
 function swap(array, index1, index2) {
    const tempHolder = array[index1];
    array[index1] = array[index2];
    array[index2] = tempHolder;
 }
