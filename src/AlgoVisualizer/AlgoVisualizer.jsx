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
        const maxBars = 100;
        const minBars = 10;
        for (let i = 0; i < maxBars; i++){
            array.push(randomIntFromInterval(minBars, maxBars));
        }
        this.setState({array});
    }



    // Ändra till rätt classname när rendering av bars fixat
    render() {
        const {array} = this.state;

        return (
            <>
            {array.map((value, idx) => (
                <div className="array-Container" key={idx}>
                     {value}
                </div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            </>
        )
    }

};



function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}