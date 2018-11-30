import React from 'react';

import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card-item">
      <Link to={props.link}>
        <div className="img" style={{backgroundImage: "url(" + props.details.img + ")"}}></div>
        <div className="text">
          <h2>{props.details.name}</h2>
          {props.details.type}
        </div>
      </Link>
    </div>
  )
}