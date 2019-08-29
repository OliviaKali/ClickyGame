import React from "react";
import Images from "./components/Images/images";
import Wrapper from "./components/Wrapper/wrapper";
import friends from "./components/friends.json";
import "./styling.css";
// import Score from "./components/Score/score"

class App extends React.Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    highScore: 0
  };

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleIncrement = id => {
    if (this.state.clicked.includes(id)) {
      this.setState(
        {
          // they lose
          score: 0,
          clicked: []
        },
        () => this.checkHighScore()
      );
      alert('You lost! Try again!')
    } else {
      this.setState({
        score: this.state.score + 1,
        clicked: [...this.state.clicked, id],
        friends: this.randomize(this.state.friends)
      }, () => this.checkHighScore());
    }
  };

  checkHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="alert alert-success fixed-top" role="alert">
          <h5 className="navTitle">
            Clicky Game! Click on an image to earn points, but don't click on
            any more than once!
          </h5>
          <h5 className="score">
            Score: {this.state.score} HighScore: {this.state.highScore}
          </h5>
        </div>
        <Wrapper>
          {this.state.friends.map(friend => (
            <Images
              handleIncrement={this.handleIncrement}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
          
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
