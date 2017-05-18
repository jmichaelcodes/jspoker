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
      deck: []
    }

    this.addValuesToCards = this.addValuesToCards.bind(this)
    this.addCardsToDeck = this.addCardsToDeck.bind(this)

  }

  componentWillMount() {
    this.addValuesToCards()
    this.addCardsToDeck("_of_clubs")
    this.addCardsToDeck("_of_diamonds")
    this.addCardsToDeck("_of_hearts")
    this.addCardsToDeck("_of_spades")
  }

addValuesToCards() {
  for (var i = 0; i < 13; i++) {
    this.setState({ cardValues: this.state.cardValues.push(i) })
  }
  console.log(this.state.cardValues)
}

addCardsToDeck(ofSuit){
    for (var i = 0; i < this.state.cardValues.length; i++) {
    this.setState({ deck: this.state.deck.push(i + ofSuit)})
  }
  console.log(this.state.deck)
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Cards card1="2_of_clubs"/>
      </div>
    );
  }
}

export default App;
