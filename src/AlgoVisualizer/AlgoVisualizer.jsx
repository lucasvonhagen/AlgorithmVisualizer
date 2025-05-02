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


    render() {
        const {array} = this.state;

        return (
            <>
            {array.map((value, idx) => (
                <div className="arrayBar" key={idx}>
                     {value}
                </div>
            ))}
            </>
        )
    }

};



function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}