import React from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Images from "./components/Images/images";
import Wrapper from "./components/Wrapper/wrapper";
import friends from "./components/friends.json";
// import Score from "./components/Score/score"

class App extends React.Component {
  state = {
    friends,
    clicked: [],
    highScore: 0
  };

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // //Remove id  // if (!id) {
  //   score=0
  //   alert("Game over. Try Again.")
  // }

  handleIncrement = id => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        clicked: []
      })
      // they lose
    } else {
      this.setState({
        clicked: [...this.state.clicked, id],
        friends: this.randomize(this.state.friends)
      });
    }
    // if (this.state.clicked === true) {
    //   this.setState({ score: 0 });
    //   alert("Game over. Try Again.")
    // }
    // // if (this.results.includes(id)) {
    // // }
    // else {
    // console.log("click hit");
    // this.setState({ score: this.state.score + 1 });
    // //   // this.setState({results: }) .filter
    // //     //filter through array
    // }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="alert alert-success fixed-top" role="alert">
          <h4>Clicky Game!</h4>
          <h6 className="score">Score: {this.state.clicked.length}</h6>
        </div>
        <Jumbotron />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Images
              // removeFriend={this.removeFriend}
              addFriend={this.addFriend} //push into array so each image has an id for the shuffle
              handleIncrement={this.handleIncrement}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              booleon={friend.booleon}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
