import React from 'react'
const getInitialState = () => ({
  time:{},
  seconds:30
})
class Timer extends React.Component {
    constructor() {
      super();
    this.state = getInitialState();
    this.timer = 0;
    this.timecounter=0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this)
    }
<<<<<<< HEAD
    secondsToTime(secs){
 
=======
    secondsToTime(secs){   
>>>>>>> 462f1a994de2572d5395c6a9698227b6f9a71fc8
      let divisor_for_minutes = secs % (60 * 60); 
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
       
        "sec": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
    resetGame = () => {
      // this.setState(getInitialState());
      window.location.reload(false);
  };
  
    countDown() {
 
      let seconds = this.state.seconds - 1;
      this.timecounter+=1
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      //give warning for time shot
      //if (seconds === 5) { 
        if(this.timecounter===25){
           alert('you are left with 5 seconds!')
      }
//checking if we are running out of time
      if (seconds === 0) { 
<<<<<<< HEAD
       //clearInterval(this.timer);
           // alert('Sorry,Game Over!')
      
=======
        clearInterval(this.timer);
            //alert('Sorry,Game Over!')
      return
>>>>>>> 462f1a994de2572d5395c6a9698227b6f9a71fc8
      }
    }
     render() {
      if (this.state.seconds === 0) { 
        clearInterval(this.timer);

       return(<div style={{textAlign:"center"}}>
<<<<<<< HEAD
       <h1 style={{ color: "red" }}>Game over!</h1>
     <button className="buttonreset" onClick={this.resetGame} >New Game</button>
=======
       <h1 style={{ color: "blue" }}>Game over!</h1>
     <button onClick={this.resetGame} >New Game</button>
>>>>>>> 462f1a994de2572d5395c6a9698227b6f9a71fc8
     </div>
     )}
      
      return(
        <div>
         
 <p style={{color:'red'}}> Remaining Time :{this.state.time.sec}</p>
                </div>
      );
    }
  }

  export default Timer
  