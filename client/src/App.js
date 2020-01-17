import React from "react";
import PlayerList from "./components/PlayerList";
import "./App.css";
import NavBarBasic from "./components/navBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBarBasic />
        <div className="player-list">
          <PlayerList players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
