import React from 'react';
import './display.css';

const Jumbotron = (props) => (
  
<div className="jumbotron">
  <p></p>
  <h1>Matching Friends</h1>
  <p>Click on an image to earn points, but don't click on any more than once!</p>
  <p>Score: {props.score} <span> High Score: {props.highScore} </span></p>
</div>
)

export default Jumbotron;