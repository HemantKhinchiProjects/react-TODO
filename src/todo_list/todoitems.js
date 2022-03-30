import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  return (
    <li id={props.id}>
      {props.value}{' '}
      <button className="delete-btn" onClick={() => props.removeItem(props.id)}>
        Complete
      </button>
    </li>
  );
};
export default Todolisttems;
