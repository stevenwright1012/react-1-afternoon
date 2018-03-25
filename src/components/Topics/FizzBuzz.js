import React, {Component} from 'react';

class FizzBuzz extends Component{
    constructor(){
        super()

        this.state = {
            fizzBuzz: [],
            userInput: '',
        }
    }
    updateInput(e){
        this.setState({
            userInput: e,
        })
    }
    fillArr(str){
        var arr = [];
        for(let i = 1; i <= parseInt(str, 0); i++){
            if(i % 3 === 0 && i % 5 === 0){
                arr.push("FizzBuzz");
            }
            else if(i % 3 === 0){
                arr.push('Fizz');
            }
            else if(i % 5 === 0){
                arr.push('Buzz'); 
            }
            else{
                arr.push(i);
            }
        }
        this.setState({
            fizzBuzz: arr,
        })
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>FizzBuzz</h4>
                <input  className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.fillArr(this.state.userInput)}>Fizz this Buzz</button>
                <span className="resultsBox">FizzBuzz: {JSON.stringify(this.state.fizzBuzz)}</span>
            </div>
        )
    }
}

export default FizzBuzz