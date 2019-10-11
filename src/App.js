import React from 'react';
import Timer from './Timer';
import './number.css'
import UserMinAndMax from './UserMinAndMax';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: 0,
      guessInput: '',
      guess: '',
      min: 0,
      max: 10,
      userMin: '',
      userMax: '',
      error: null,
      counter: 1,

      
    };
  }

  generateRandomNumber(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() });
  }

  handleUserInput(e) {
    this.setState( { guessInput: e.target.value } );
  }

  handleRangeInput(e) {
    let { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
  }

  handleRangeClick () {
    this.setState({
      min: this.state.userMin,
      max: this.state.userMax,
      userMax: '',
      userMin: '',
      randomNumber: this.generateRandomNumber(this.state.userMin, this.state.userMax)
    });
  }

  handleGuessClick() {
    this.refs.child.startTimer();
    this.setState({
      guess: parseInt(this.state.guessInput),
      counter:this.state.counter + 1,
      guessInput: ''
    });
    this.displayMessage();
  }

  handleClearClick() {
    this.setState({ guessInput: '' });
  }

  handleResetClick() {

    this.setState({
      guessInput: '',
      guess: '',
      randomNumber: this.generateRandomNumber(),
      message: '',
      min: 0,
      max: 10,
     
    } )  
    window.location.reload(false)    
      };
