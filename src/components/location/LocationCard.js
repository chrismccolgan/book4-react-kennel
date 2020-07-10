import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-locationname">{props.location.city}, {props.location.state}</span>
        </h3>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;