import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()

        this.state ={
            unFilteredArray: [{
                name: "Steven",
                age: 27,
                clothes: true,
            },
            {
                name: "Christine",
                age: 29,
                clothes: false,
            },
            {
                name: "Link",
                age: 2,
                clothes: true,
                diaper: "Kirkland",
            }],
            userInput: '',
            filteredArray: [],
        }
    }

    changeUserInput(e){
        this.setState({
            userInput: e,
        })
    }
    
    filterArray(arr){
        var newArr = arr.filter((val) => val[this.state.userInput])

        this.setState({
            filteredArray: newArr,
        })
    }
    render(){
        return (<div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className="inputLine" onChange={(e) =>this.changeUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.filterArray(this.state.unFilteredArray)}>Filter</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>)
    }
}

export default FilterObject