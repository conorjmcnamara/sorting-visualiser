import React from 'react';
import './complexityTable.css';

export default class ComplexityTable extends React.Component {
    render() {
        return (
            // table with updatable IDs
            <table className="complexityTable" id="algoComplexityTable">
                <caption id="algoName"></caption>
                <tbody>
                    <tr>
                        <th>Time Complexity (best)</th>
                        <th>Time Complexity (average)</th>
                        <th>Time Complexity (worst)</th>
                        <th>Space Complexity</th>
                    </tr>

                    <tr>
                        <td data-label="Time Complexity (best)" id="timeBest"></td>
                        <td data-label="Time Complexity (average)" id="timeAverage"></td>
                        <td data-label="Time Complexity (worst)" id="timeWorst"></td>
                        <td data-label="Space Complexity" id="space"></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

// update the table with Quick Sort's complexity
export function quickSortComplexity() {
    document.getElementById('algoComplexityTable').style.cssText = "visibility: visible; margin-top: 73vh;";
    document.getElementById("algoName").innerHTML = "Quick Sort complexity:";
    document.getElementById("timeBest").innerHTML = "O(n log(n))";
    document.getElementById("timeAverage").innerHTML = "O(n log(n))";
    document.getElementById("timeWorst").innerHTML = "O(n<sup>2</sup>)";
    document.getElementById("space").innerHTML = "O(log(n))";
}

// update the table with Merge Sort's complexity
export function mergeSortComplexity() {
    document.getElementById('algoComplexityTable').style.cssText = "visibility: visible; margin-top: 73vh"
    document.getElementById("algoName").innerHTML = "Merge Sort complexity:";
    document.getElementById("timeBest").innerHTML = "O(n log(n))";
    document.getElementById("timeAverage").innerHTML = "O(n log(n))";
    document.getElementById("timeWorst").innerHTML = "O(n log(n))";
    document.getElementById("space").innerHTML = "O(n)";
}

// update the table with Heap Sort's complexity
export function heapSortComplexity() {
    document.getElementById('algoComplexityTable').style.cssText = "visibility: visible; margin-top: 73vh"
    document.getElementById("algoName").innerHTML = "Heap Sort complexity:";
    document.getElementById("timeBest").innerHTML = "O(n log(n))";
    document.getElementById("timeAverage").innerHTML = "O(n log(n))";
    document.getElementById("timeWorst").innerHTML = "O(n log(n))";
    document.getElementById("space").innerHTML = "O(1)";
}

// update the table with Insertion Sort's complexity
export function insertionSortComplexity() {
    document.getElementById('algoComplexityTable').style.cssText = "visibility: visible; margin-top: 73vh"
    document.getElementById("algoName").innerHTML = "Insertion Sort complexity:";
    document.getElementById("timeBest").innerHTML = "O(n)";
    document.getElementById("timeAverage").innerHTML = "O(n<sup>2</sup>)";
    document.getElementById("timeWorst").innerHTML = "O(n<sup>2</sup>)";
    document.getElementById("space").innerHTML = "O(1)";
}
