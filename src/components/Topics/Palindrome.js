import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
    updateInput(e){
        this.setState({
            userInput: e,
        })
    }
    checkPalindrome(str){
        var newStr = str.replace(/\W/g, '').toLowerCase()
        console.log(newStr);
        
        var reverseStr;
        newStr.split("").reverse().join("") === newStr ? reverseStr = "Yes, it's a palidrome!" : 
        reverseStr = "That ain't no palindrome";
        this.setState({
            palindrome: reverseStr,
        })
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input  className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome