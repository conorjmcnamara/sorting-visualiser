import React from 'react';
import './sortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayBars: []
        }
    }

    // reset array on initial page loading and window resizing
    componentDidMount() {
        this.resetArray();
        window.addEventListener("resize", this.resetArray.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resetArray.bind(this));
    }

    resetArray() {
        const array = [];

        // find number of bars based on window width
        const width = window.innerWidth;
        const container = width - 100;
        const barNum = container / 4.25;

        // find maximum bar height based on window height
        const height = window.innerHeight;
        const maxBarHeight = height - 390;

        for(let i = 0; i < barNum; i++) {
            array.push(randomInteger(5, maxBarHeight));
        }

        this.setState(() => {
            return{arrayBars: array};
        })
    }

    render() {
        const array = this.state.arrayBars;
        return (
            <div className="array-container"> {
                array.map((value, idx) => (
                    <div className='array-bar' key={idx} style={{height: `${value}px`}}></div>
                ))}       
            </div>
        );
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}