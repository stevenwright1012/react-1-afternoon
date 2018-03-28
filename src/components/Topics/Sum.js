import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    updateNum1(e){
        this.setState({
            number1: parseInt(e, 10)
        })
    }
    updateNum2(e){
        this.setState({
            number2: parseInt(e, 10)
        })
    }
    sum(num1, num2){
        this.setState({
            sum: num1 + num2,
        })
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.updateNum1(e.target.value)} placeholder="Number 1"/>
                <input className="inputLine" onChange={(e) => this.updateNum2(e.target.value)} placeholder="Number 2"/>
                <button className="confirmationButton" onClick={() => this.sum(this.state.number1, this.state.number2)}>Sum</button>
                <span className="resultsBox">Sum:{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum