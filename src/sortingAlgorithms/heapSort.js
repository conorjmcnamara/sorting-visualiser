export function heapSortAnimation(array) {
    const copyArray = array.slice();
    const arrayToAnimate = [];
    if (array.length <= 1) return array;
    heapSort(copyArray, arrayToAnimate);
    return arrayToAnimate;
}

function heapSort(array, arrayToAnimate) {
    var length = array.length;

    // build a max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i, arrayToAnimate);
    }

    for (let i = length - 1; i > 0; i--) {
        arrayToAnimate.push([[i, array[0]], false]);
        arrayToAnimate.push([[0, array[i]], false]);
        
        swap(array, i, 0); // move the current parent node to the end
        heapify(array, i, 0, arrayToAnimate); // heapify the reduced heap
    }
}

// function that creates a heap using i as the index of the parent node
function heapify(array, length, i, arrayToAnimate) {
    var largest = i;
    var leftChild = 2 * i + 1;
    var rightChild = 2 * i + 2;

    // if the left child is larger than the parent node
    if (leftChild < length && array[i] < array[leftChild]) {
        arrayToAnimate.push([[i, leftChild], true]);
        arrayToAnimate.push([[i, leftChild], true]);
        largest = leftChild;
    }

    // if the right child is larger than the parent node
    if (rightChild < length && array[largest] < array[rightChild]) {
        arrayToAnimate.push([[rightChild, largest], true]);
        arrayToAnimate.push([[rightChild, largest], true]);
        largest = rightChild;
    } 

    // if the parent node isn't the largest element, swap it with the largest child
    if (largest !== i) {
        arrayToAnimate.push([[i, array[largest]], false]);
        arrayToAnimate.push([[largest, array[i]], false]);
        swap(array, i, largest);
        arrayToAnimate.push([largest, array[largest], i, array[i]]);

        // recursively heapify the affected sub-tree
        heapify(array, length, largest, arrayToAnimate);
    }
}

function swap(array, index1, index2) {
    const tempHolder = array[index1];
    array[index1] = array[index2];
    array[index2] = tempHolder;
}
