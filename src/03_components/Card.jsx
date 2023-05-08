import React from 'react';
import './Card.css';

const Card = (props) => {
  // console.log(props.children);  // (4) [{…}, {…}, {…}, {…}]

  const classes = 'card ' + props.className;
  // console.log(classes);  // card expense-item

  return (
    <div className={classes}>
        {props.children}
    </div>
  );
};

export default Card;
