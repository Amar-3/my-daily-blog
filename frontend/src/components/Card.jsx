import React from 'react';
import './Card.css';

const Card = ({title}) => {
  return (
   <>
    <div className="card">
        <h2 className="title">{title}</h2>
        <button className="read">read...</button>
        <button className="create">create...</button>
        
    </div>
   </>
  )
}

export default Card
