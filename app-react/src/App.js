import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cards from "./components/Cards"

class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
      cardValues: [],
      clubs: [],
      diamonds: [],
      hearts: [],
      spades: [],
      deck: [],
      hand: [],
      card1: '',
      card2: '',
      card3: '',
      card4: '',
      card5: '',
    }

    this.addCardsToDeck = this.addCardsToDeck.bind(this)
    this.setHand = this.setHand.bind(this)
    this.shuffle = this.shuffle.bind(this)

  }

  componentWillMount() {
    this.shuffle()
  }

  shuffle() {
    this.addCardsToDeck("_of_clubs")
    this.addCardsToDeck("_of_diamonds")
    this.addCardsToDeck("_of_hearts")
    this.addCardsToDeck("_of_spades")
    this.setHand()
  }

addCardsToDeck(ofSuit){
    for (var i = 2; i < 11; i++) {
    this.setState({ deck: this.state.deck.push(i + ofSuit)})
  }

  this.setState({deck: this.state.deck.push("ace" + ofSuit)})
  this.setState({deck: this.state.deck.push("jack" + ofSuit)})
  this.setState({deck: this.state.deck.push("queen" + ofSuit)})
  this.setState({deck: this.state.deck.push("king" + ofSuit)})

  console.log(this.state.deck)
}

setHand() {

  for (var i = 0; i < 5; i++) {
    var j = Math.floor(Math.random() * this.state.deck.length - 1) + 1
    console.log(j)
    this.setState({ hand: this.state.hand.push(this.state.deck[j])})
    this.setState({ deck: this.state.deck.splice(j, 1)})
  }

  this.setState({ card1: this.state.hand[0]})
  this.setState({ card2: this.state.hand[1]})
  this.setState({ card3: this.state.hand[2]})
  this.setState({ card4: this.state.hand[3]})
  this.setState({ card5: this.state.hand[4]})

  console.log("hand state " + this.state.hand)
  console.log("deck state " + this.state.deck)
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Cards card1={this.state.card1} card2={this.state.card2} card3={this.state.card3} card4={this.state.card4} card5={this.state.card5} />
        <br/><br/><br/> 
        <div className="btn btn-lg btn-success" onClick={this.shuffle}>Shuffle</div>
      </div>
    );
  }
}

export default App;
