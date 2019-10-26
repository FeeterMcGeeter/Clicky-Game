import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameCard from "./components/GameCard"
import Column from "./Column";
import Container from "./Container";
import Row from "./Row";
import megaManCards from "./megaManCards.json";
import "./App.css";

// SHUFFLING THE GAME CARDS
function randomCardGenerator(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class App extends Component {
  state = {
    megaManCards,
    currentScore: 0,
    highScore: 0,
    correctOrIncorrect: "",
    clicked: []
  }

  // CLICK HANDLER EVENT FOR THE GAME CARDS
  cardClickEvent = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.incrementScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetCards();
    }
  }

  // INCREMENT THE SCORE 
  incrementScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctOrIncorrect: "You Guessed Correctly!"
    })
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } else if (newScore === 12) {
      this.setState({ correctOrIncorrect: "You Guessed All Cards Correctly! You Win!" });
    }
    this.shuffleCards();
  }

  // SHUFFLING THE CARDS
  shuffleCards = () => {
    let shuffledCards = randomCardGenerator(megaManCards);
    this.setState({ megaManCards: shuffledCards });
  }

  // RESET THE CARDS WHEN THE GAME STARTS OVER
  resetCards = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      correctOrIncorrect: "You Guessed Incorrectly!",
      clicked: []
    })
  }

  // RENDERING THE PAGE 
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Mega Man Clicky Game"
        />
        <Title
          score={this.state.currentScore}
          highScore={this.state.highScore}
          correctOrIncorrect={this.state.correctOrIncorrect}
        />
        <Container>
          <Row>
            {this.state.megaManCards.map(gameCard => (
              <Column size="md-3 sm-4">
                <GameCard
                  key={gameCard.id}
                  cardClickEvent={this.cardClickEvent}
                  incrementScore={this.incrementScore}
                  shuffleCards={this.shuffleCards}
                  resetCards={this.resetCards}
                  id={gameCard.id}
                  image={gameCard.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default App;
