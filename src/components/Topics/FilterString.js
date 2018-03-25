import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ["mask", 'ocarina', "wind", "twilight", "sword", "phantom", "majora's mask", "tailwind", "master sword"],
            userInput: '',
            filteredArray: [],
        }
    }

    updateInput(e){
        this.setState({
            userInput: e,
        })
    }

    filterArray(str){
        var newArr = this.state.unFilteredArray.filter((val) => val.includes(str));
        this.setState({
            filteredArray: newArr,
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)}/>  
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString