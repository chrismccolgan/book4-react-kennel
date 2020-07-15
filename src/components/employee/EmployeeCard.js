import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-employeename">{props.employee.name}</span>
          <p>Phone Number: {props.employee.phoneNumber}</p>
          <button type="button" onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
          <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
          <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;