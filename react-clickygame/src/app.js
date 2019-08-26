import React from "react";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Images from "./components/Images/images";
import Wrapper from "./components/Wrapper/wrapper";
import friends from "./components/friends.json";
// import Title from "./components/Title/title";
// import Score from "./components/Score/score"

class App extends React.Component {
  state = {
    friends,
    score: 0
  };

  handleIncrement = () => {
    console.log("click hit")
    this.setState({ score: this.state.score + 1 });
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {/* <Score /> */}
        <div className="alert alert-success fixed-top" role="alert">
          <h4>Clicky Game!</h4>
          <h6>Score: {this.state.score}</h6>
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
