import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  const [list, setList] = useState([]);
  const removeList = (id) => {
    const newTours = list.filter((item) => item.id !== id);
    setList(newTours);
    alert();
  };

  return (
    <li id={props.id}>
      {props.value}{' '}
      <button className="delete-btn" onClick={() => removeList(id)}>
        Complete
      </button>
    </li>
  );
};
export default Todolisttems;
