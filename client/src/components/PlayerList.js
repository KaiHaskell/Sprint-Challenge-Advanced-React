import React from "react";

const PlayerList = ({ players }) => {
  console.log(players);
  return (
    <div className="card-custom">
      {players.map(player => (
        <div className="card-body-custom">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.country}</p>
          <p className="card-text">{player.searches}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
