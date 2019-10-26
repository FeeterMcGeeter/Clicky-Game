import React from "react";
import styles from "./GameCard.module.css";

const GameCard = props => (
  <div 
    className={styles.card}
    value={props.id} 
    onClick={() => props.cardClickEvent(props.id)}
  >
    <div className={styles.imgContainer}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GameCard;