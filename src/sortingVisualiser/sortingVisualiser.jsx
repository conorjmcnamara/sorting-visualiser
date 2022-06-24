import React from 'react';
import './sortingVisualiser.css';
import { insertionSortAnimation } from '../sortingAlgorithms/insertionSort.js';
import { quickSortComplexity, mergeSortComplexity, heapSortComplexity, insertionSortComplexity } from '../complexityTable/complexityTable.jsx';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomArray: [],
            isSorting: false,
            isSorted: false,
            waitingReset: false
        }
    }

    // reset the array on initial page loading and window resizing
    componentDidMount() {
        this.resetArray();
        window.addEventListener("resize", this.resetArray.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resetArray.bind(this));
    }

    resetArray() {
        if(this.state.isSorting) return;
        const array = [];

        // find the number of bars based on window width
        const width = window.innerWidth;
        const containerWidth = width - 100;
        const numBars = containerWidth / 4.25;

        // find the maximum bar height based on window height
        const height = window.innerHeight;
        const maxBarHeight = height - 390;

        for(let i = 0; i < numBars; i++) {
            array.push(randomInteger(5, maxBarHeight));
        }

        this.setState(() => {
            return {randomArray: array, isSorted: false, waitingReset: false};
        })
    }

    insertionSort() {
        if(this.state.isSorted) return;

        this.setState(() => {
            return {isSorting: true};
        });

        // sortedArray is made up of arrays that each contain two sub-arrays (numerical and boolean)
        const sortedArray = insertionSortAnimation(this.state.randomArray);
        this.animation(sortedArray);
    }

    animation(sortedArray) {
        const unsortedBars = document.getElementsByClassName("arrayBar");
        const delay = 1.5; // slow down the animation
        let k = 0;

        // iterate through the sorted array
        for(let i = 0; i < sortedArray.length; i++) {
            const isColourChange = sortedArray[i][1]; // take the array's boolean element

            // animate colour changes
            if(isColourChange === true) {
                const sortedBars = sortedArray[i][0]; // take the array's numerical element
                
                setTimeout(() => {
                    for(let j = 0; j < sortedBars.length; j++) {
                        unsortedBars[sortedBars[j]].style.backgroundColor = 'red';
                    }
                }, k++ * delay);

                setTimeout(() => {
                    for(let j = 0; j < sortedBars.length; j++) {
                        unsortedBars[sortedBars[j]].style.backgroundColor = 'black';
                    }
                }, k++ * delay);
            }

            // animate the movement of bars
            else {
                setTimeout(() => {
                    const [bar, newHeight] = sortedArray[i][0];
                    const barStyle = unsortedBars[bar].style;
                    barStyle.height = `${newHeight}px`;
                }, k++ * delay);
            }

            // update states when the sorted array is displayed
            // prevent users from resetting the array while it's sorting
            if(i === sortedArray.length - 1) {
                setTimeout(() => {
                    this.setState(() => {
                        return {isSorting: false, isSorted: true, waitingReset: true};
                    })
                }, k++ * delay);
            }
        }
    }

    render() {
        const array = this.state.randomArray;
        return (
            <div className="arrayContainer"> {
                array.map((value, idx) => (
                    <div className='arrayBar' key={idx} style={{height: `${value}px`}}></div>
                ))}

                <p className="caption">Choose an algorithm:</p>
                <div className="buttonMenu">
                    <button className="resetButton" onClick={() => this.resetArray()} disabled={this.state.isSorting}>Reset Array</button>
                    <button className="sortButton" onClick={() => quickSortComplexity()} disabled={this.state.isSorting || this.state.waitingReset}>Quick Sort</button>
                    <button className="sortButton" onClick={() => mergeSortComplexity()} disabled={this.state.isSorting || this.state.waitingReset}>Merge Sort</button>
                    <button className="sortButton" onClick={() => heapSortComplexity()} disabled={this.state.isSorting || this.state.waitingReset}>Heap Sort</button>
                    <button className="sortButton" onClick={() => {this.insertionSort(); insertionSortComplexity()}} disabled=
                        {this.state.isSorting || this.state.waitingReset}>Insertion Sort</button>
                </div>
            </div>
        );
    }
}

// return a random integer between an interval
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
