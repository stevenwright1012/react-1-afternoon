import React, { Component }from 'react';

export default class CountingVowels extends Component{
    constructor(){
        super()

        this.state = {
            inputValue: '',
            numberOfVowels: 0,            
        }
    }

    changeInput(e){
        this.setState({
            inputValue: e,
        })
    }
    countVowels(str){
        var arr = str.toUpperCase().split('');
        let total = 0;
        arr.forEach((item, i) => {
            switch (item) {
                case 'A':
                    total++
                    break;
                case 'E':
                    total++
                    break;
                case 'I':
                    total++
                    break;
                case 'O':
                    total++
                    break;
                case 'U':
                    total++
                    break;
                default:
            }           
        })
    this.setState({
        numberOfVowels: total
    })
    console.log(total);
    
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Counting Vowels</h4>
                <input  className="inputLine" onChange={(e) => this.changeInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.countVowels(this.state.inputValue)}>Count</button>
                <span className="resultsBox">Number of vowels: {this.state.numberOfVowels}</span>
            </div>
        )
    }
}