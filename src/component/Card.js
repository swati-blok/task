import React, { Fragment } from 'react';
import '../Style/card.css';

const Card = ({cardimg,title,description}) => {
  return (
    <Fragment>
    <div className="card">
      <div className="cardimage">
        <img src={cardimg} className="card-logo"/>
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
        
    </div>
    </Fragment>
  )
}

export default Card