/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Navigate, useParams } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data";

const Player = () => {
  const { id } = useParams();

  const [card, setCard] = useState({
    name: "",
    content: "",
  });

  return (
    <div className="player">
      <div className="player-info">
        {cards_data.map((card, id) => {
          return (
            <div className="card" key={id}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Player;
