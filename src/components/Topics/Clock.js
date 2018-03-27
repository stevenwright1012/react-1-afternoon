import React, {Component}from 'react';

class Clock extends Component{
    constructor(){
        super()

        this.state={
            time: new Date().toLocaleTimeString(),
        }
    }
    // time(){
    //     var today = new Date();
    //     var hours = today.getHours();
    //     var minutes = today.getMinutes();
    //     var seconds = today.getSeconds();
    //     var addZero = (num) => {
    //         if(num<10){
    //             return "0"+num;
    //         }
    //         return num;
    //     }   
    //     hours = addZero(hours);
    //     minutes = addZero(minutes);
    //     seconds = addZero(seconds);
    //     return `${hours}:${minutes}:${seconds}`;
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.newTime(),
          1000
        );
      }
    newTime(){
        this.setState({
            time: new Date().toLocaleTimeString(),
        })
    }
    render(){
        // setTimeout(() => this.time(), 1000);
        return(
            <div className="puzzleBox filterStringPB">
                <h4>What time is it?</h4>
                <span className="resultsBox">{this.state.time}</span>
            </div>
        )
    }
}
export default Clock;