import React from "react";
import styles from "./Title.module.css";

const Title = props => (
    <div className={styles.scoreIntructionsContainer}>
        <div className={styles.instructions}>
            <p>Click an image to start the game.</p>
            <p>Be careful not to click the same image twice!</p>
        </div>
        <div className={styles.correctOrIncorrectText}>
            <p>{props.correctOrIncorrect}</p>
        </div>
        <div className={styles.scores}>
            <p>Current Score: {props.score}</p>
            <p>High Score: {props.highScore}</p>
        </div>
    </div>
)

export default Title;