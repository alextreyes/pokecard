import React from "react";
import { useFlip, useAxios } from "./hooks";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip(); // Use the custom hook

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
