import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    changeInput(e){
        this.setState({
            userInput: e,
        })  
    }

    splitArray(){
        var arr = this.state.userInput.split(',');
        var evens = arr.filter((val) => val % 2 === 0)
        var odds = arr.filter((val) => val % 2 !== 0)

        this.setState({
            evenArray: evens.map((val) => parseInt(val, 10)),
            oddArray: odds.map((val) => parseInt(val, 10)),
        })
    }
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.changeInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.splitArray()}>Split</button>
                <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}

export default EvenAndOdd;