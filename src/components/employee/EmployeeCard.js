import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-employeename">{props.employee.name}</span>
        <p>Phone Number: {props.employee.phoneNumber}</p>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;