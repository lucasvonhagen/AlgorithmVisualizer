import React from 'react';
import './AlgoVisualizer.css'

export default class AlgoVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    
    resetArray(){
        const array = [];
        const maxBars = 700;
        const minBars = 10;
        for (let i = 0; i < 310; i++){
            array.push(randomIntFromInterval(minBars, maxBars));
        }
        this.setState({array});
    }


    mergeSort(){
       const jsSortedArray = this.state.array
       .slice()
       .sort((a, b) => a - b);
    }
    bubbleSort(){}




    // Ändra till rätt classname när rendering av bars fixat
    render() {
        const {array} = this.state;

        return (
            <div className='arrayCotainer'>
                {array.map((value,idx) => (
                    <div
                        className='arrayBar'
                        key={idx}
                        style={{height: `${value}px`}}
                    ></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        )
    }

};

function equalArrays(arrayOne, arrayTwo){
    if (arrayOne.length !== arrayTwo.length) return false;
    for(let i = 0; i<arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}