import React from "react";
import "./Owner.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-ownername">{props.owner.name}</span>
        <p>Phone Number: {props.owner.phoneNumber}</p>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;