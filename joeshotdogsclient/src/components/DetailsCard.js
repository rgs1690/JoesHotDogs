import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function HotDogDetailsCard({ hotdog }) {
  return (
<div className="card mb-3">
  <img src={hotdog.imageUrl} className="card-img-top" alt={hotdog.name} />
  <div className="card-body">
    <h5 className="card-title">{hotdog.name}</h5>
    <p className="card-text">{hotdog.description}</p>
  </div>
</div>
  )
}

export default HotDogDetailsCard;