import React, {Component} from 'react';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FizzBuzz from '../Topics/FizzBuzz';


class TopicBrowser extends Component{
    render(){
        return ( <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <FizzBuzz />
        </div>
        )
    }
}

export default TopicBrowser