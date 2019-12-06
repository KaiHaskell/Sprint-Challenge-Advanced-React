import React from "react";
import PlayerList from "./components/playerList";
import NavBarBasic from "./components/navBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  fetchPlayers = () => {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchPlayers();
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
