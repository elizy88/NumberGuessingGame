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

<<<<<<< HEAD
          };
=======
      
    };
>>>>>>> 462f1a994de2572d5395c6a9698227b6f9a71fc8
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
    console.log(name, value);
  }

  handleRangeClick = e => {
    e.preventDefault();
    this.setState({
      min: this.state.userMin,
      max: this.state.userMax,
      //userMax: '',
      //userMin: '',
      randomNumber: this.generateRandomNumber(this.state.userMin, this.state.userMax)
    },() =>{
      this.refs.child.startTimer(); 
  });
}//() => {
      // start the game once you have your random number!
      handleGuessClick() {
    
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
    displayMessage() {
      let userGuess = parseInt(this.state.guessInput);
     let min = this.state.min;
      let max = this.state.max;
     
      if ( userGuess > max || userGuess < min) {
        const mes=`value must be between ${this.state.min} and ${this.state.max} `
        this.setState({
          message:mes,
          counter:this.state.counter + 1
        });
      }
      else if ( userGuess === this.state.randomNumber ) {
       const mes= `YOU WON! In ${this.state.counter} Attempts in
        ${this.refs.child.timecounter} seconds!!!`
        console.log('CLEAR int: ', this.refs.child.timer);
       
        this.setState({
          message: mes,
          min: min = 0,
          max: max = 10,
          time:clearInterval(this.refs.child.timer),
         
        })
        
        
        }        
             
       else if ( userGuess > this.state.randomNumber ) {
        const mes=`Too High.Try Again: ${this.state.counter}`
        this.setState ({
          message:mes,
          
          
        });
      } else {
        const mes=`Too Low,Try Again: ${this.state.counter}`
        this.setState ({
       
          message:mes,
         
        });
      }
    }
  
  
    disableRangeButton() {
      if ( this.state.userMin === '' || this.state.userMax === '' ) {
        return true
      } else {
        return false
      }
    }
  
    render() {
          return(
        <main className='container'>
           <section className='custom-max-min'>
          <input
            className='guess'
            type='text'
            value='Number Guessing Game' readOnly/>
         
          <Timer ref="child"/>
              
          <div className='right-container'>
            <UserMinAndMax
              userMin={this.state.UserMin}
              userMax={this.state.UserMax}
              handleRangeInput={this.handleRangeInput.bind(this)}
              handleRangeClick={this.handleRangeClick.bind(this)}
              value={this.handleRangeInput.bind(this)}
              disabled={this.disableRangeButton()}
             />
  
            <h5 className='last-guess-text'>
              Your last guess was:<br />
            </h5>
  
            <h4 className='number-guess'>
              {this.state.guess}
            </h4>
  
            <div className='message-text'>
              {this.state.message}
              
            </div>
          </div>
  
          <div className='left-container'>
           <h4 className='min-max-text'>
             Guess a number between {this.state.min} and {this.state.max}
           </h4>
  
            <input
              type='number'
              className='guess-input-field'
              value={this.state.guessInput}
              onChange={this.handleUserInput.bind(this)}
              placeholder="Your best guess" />
  <br/><br/>
            <section className='buttons'>
              <button
                className="GuessButton"
                onClick={this.handleGuessClick.bind(this)}
                disabled={this.state.guessInput === '' ? true : false}>
                Guess
              </button>
  
              <button
                className="ClearButton"
                onClick={this.handleClearClick.bind(this)}
                disabled={this.state.guessInput === '' ? true : false}>
                Clear
              </button>
  
              <button
                className="ResetButton"
                onClick={this.handleResetClick.bind(this)}
                >
                Reset
              </button>
            </section>
          </div>
        
        </section>
        </main>
      )
    }
  
  }
  
  export default App
