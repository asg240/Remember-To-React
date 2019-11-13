import React, { Component } from 'react';
import Jumbotron from './components/display/display.js';
import Card from './components/card/card.js';
import cards from './cards.json';
import './index.css';

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    clickedCards: [],
  }

  updateScore = (id) => {
     if (this.state.clickedCards.includes(id)) {
      alert('You picked that character already!');
      this.setState({ score: 0, clickedCards: [] })
    }

    else {
      this.setState({ clickedCards: [...this.state.clickedCards, id] })
      this.setState({ score: this.state.score + 1 })
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 })
      }if (this.state.score === 11) {
        this.setState({ score: 0, highScore: 12, clickedCards: [], cards: cards })
        alert('You won!');
      }
    }
  }

  //randomize
  randomCards = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ randomize: cards });
  }


  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <div className="container">
          {this.state.cards.map(cardRender => (
            <div className='col-md-3' id={cardRender.id}>

              <Card
                image={cardRender.image}
                randomCards={() => { this.randomCards(this.state.cards) }}
                updateScore={() => { this.updateScore(cardRender.id) }} />
                
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
