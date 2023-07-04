import React from 'react';
import './Card.css';


const Card = ({ title, description, date, category }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <span className="card-category">{category}</span>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-date">{date}</span>
      </div>
    </div>
  );
};

export default Card;
