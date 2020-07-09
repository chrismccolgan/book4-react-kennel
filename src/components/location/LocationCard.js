import React from "react";
import "./Location.css";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-locationname">{props.location.city}, {props.location.state}</span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;