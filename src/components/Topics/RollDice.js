import React, {Component} from 'react';

class RollDice extends Component{
    constructor(){
        super()

        this.state = {
            rolls: [],
            sides: 0,
            numberOfDice: 0,
        }
        this.changeSides = this.changeSides.bind(this)
        this.changeNumberOfDice = this.changeNumberOfDice.bind(this)
        this.rollDice = this.rollDice.bind(this)
    }
    changeSides(e){
        this.setState({
            sides: +e,
        })
    }
    changeNumberOfDice(e){
        this.setState({
            numberOfDice : +e,
        })
    }
    rollDice(sides, num){
        var diceRolls = []
        for(let i = 1; i <= num; i++){
            diceRolls.push(Math.floor(Math.random() * sides + 1))
        }
        this.setState({
            rolls: diceRolls,
        })
    }
    render(){
        var total = this.state.rolls.reduce((prev, next) => prev + next, 0)
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Roll Dice</h4>
                <input className="inputLine" onChange={(e) => this.changeSides(e.target.value)} placeholder="Number of sides"/>
                <input className="inputLine" onChange={(e) => this.changeNumberOfDice(e.target.value)} placeholder="Number of dice"/>
                <button className="confirmationButton" onClick={() => this.rollDice(this.state.sides, this.state.numberOfDice)}>Roll</button>
                <span className="resultsBox">Rolls: {JSON.stringify(this.state.rolls)}</span>
                <span className="resultsBox">Total: {JSON.stringify(total)}</span>
            </div>
        )
    }
}

export default RollDice