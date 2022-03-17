import React, { Component } from 'react';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku'
import Frieza from './components/Frieza';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    vegeta:100,
    goku:100
  }

  //passe le parametre du composent qui modif le state
  reduceLife = (param, param2)=>{
    console.log(param)

    if(param === "Goku"){
      this.setState({
        vegeta:this.state.vegeta -param2
      })
    }else{
      this.setState({
        goku:this.state.goku - param2
      })
    }

  }

  render() {


    return (
      <div className='container text-center'>
        <h1>Goku VS Vegeta</h1>
        <hr />
        <div className='row'>
          <Vegeta message="Vegeta" life={this.state.vegeta} reduceHanler={this.reduceLife}/>
          <Goku message="Goku" life={this.state.goku} reduceHanler={this.reduceLife}/>
          <Frieza/>
        </div>
      </div>
    );
  }
}

export default App;
