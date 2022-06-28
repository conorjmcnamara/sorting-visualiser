export function mergeSortAnimation(array) {
    const copyArray = array.slice();
    const arrayToAnimate = [];
    if (array.length <= 1) return array;
    mergeSort(copyArray, 0, copyArray.length - 1, arrayToAnimate);
    return arrayToAnimate;
}

function mergeSort(array, start, end, arrayToAnimate) {
    if (end <= start) return;
    let middle = Math.floor((start + end) / 2); // avoid decimals in an odd length array

    // recursively sort the array by dividing it in half
    mergeSort(array, start, middle, arrayToAnimate);
    mergeSort(array, middle + 1, end, arrayToAnimate);

    // merge the sorted halves together
    merge(array, start, middle, end, arrayToAnimate);
}

function merge(array, start, middle, end, arrayToAnimate) {
    let leftArray = [];
    let rightArray = [];
    let leftArrayLength = middle - start + 1;
    let rightArrayLength = end - middle;

    // fill in the left and right sub-arrays
    for (let i = 0; i < leftArrayLength; ++i) {
        leftArray[i] = array[start + i];
    }

    for (let i = 0; i < rightArrayLength; ++i) {
        rightArray[i] = array[middle + 1 + i];
    }

    let leftIndex = 0;
    let rightIndex = 0;
    let currentIndex = start;

    // compare each index of the sub-arrays and take the lowest value
    while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
        arrayToAnimate.push([[start + leftIndex, middle + rightIndex], true]);

        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            arrayToAnimate.push([[currentIndex, leftArray[leftIndex]], false]);
            array[currentIndex] = leftArray[leftIndex++];
        }

        else {
            arrayToAnimate.push([[currentIndex, rightArray[rightIndex]], false]);
            array[currentIndex] = rightArray[rightIndex++];
        }
        
        currentIndex++;
    }

    // add the remaining elements of leftArray, if any
    while (leftIndex < leftArrayLength) {
        arrayToAnimate.push([[start + leftIndex], true]);
        arrayToAnimate.push([[currentIndex, leftArray[leftIndex]], false]);
        array[currentIndex++] = leftArray[leftIndex++];
    }

    // add the remaining elements of rightArray, if any
    while (rightIndex < rightArrayLength) {
        arrayToAnimate.push([[middle + rightIndex], true]);
        arrayToAnimate.push([[currentIndex, rightArray[rightIndex]], false]);
        array[currentIndex++] = rightArray[rightIndex++];
    }
}
