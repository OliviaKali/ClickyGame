import React from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Images from "./components/Images/images";
import Wrapper from "./components/Wrapper/wrapper";
import friends from "./components/friends.json";
// import Score from "./components/Score/score"

class App extends React.Component {
  state = {
    friends,
    score: 0,
    results: []
  };

  shuffle = array => {
    var m = array.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  // //Remove id  // if (!id) {
  //   score=0
  //   alert("Game over. Try Again.")
  // }

  handleIncrement = id => {
    // if (!id) {
    //   score=0
    //   alert("Game over. Try Again.")
    // }
    // if (this.results.includes(id)) {
    // }
    // else {
    console.log("click hit");
    this.setState({ score: this.state.score + 1 });
    //   // this.setState({results: }) .filter
    //     //filter through array
    // }
  };

  //Push into Array
  addFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const results = this.state.friends.filter(friend => friend.id === id);
    this.setState({ results: results });
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // this.setState({ friends });
  };

  removeFriend = id => {
    //onclick function to remove id without removing the picture
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <div className="alert alert-success fixed-top" role="alert">
          <h4>Clicky Game!</h4>
          <h6 className="score">Score: {this.state.score}</h6>
        </div>
        <Jumbotron />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Images
              removeFriend={this.removeFriend}
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
