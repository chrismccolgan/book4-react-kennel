import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";

import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from './employee/EmployeeEditForm';
import EmployeeWithAnimals from './employee/EmployeeWithAnimals';
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import LocationEditForm from './location/LocationEditForm';
import OwnerList from "./owner/OwnerList";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from './owner/OwnerEditForm';

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    // Check if credentials are in session storage returns true/false
    <React.Fragment>
      <Route exact path="/" render={props => {
        return <Home />;
      }} />

      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />

      {/* Make sure you add the `exact` attribute here */}
      {/* //updated route: `/animals` */}
      <Route exact path="/animals" render={props => {
        if (hasUser) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (hasUser) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      {/* Our shiny new route. */}
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />

      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route exact path="/locations" render={props => {
        if (hasUser) {
          return <LocationList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route exact path="/locations/:locationId(\d+)" render={props => {
        if (hasUser) {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      {/* Our shiny new route. */}
      <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
      }} />

      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route exact path="/employees" render={props => {
        if (hasUser) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />

      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />

      <Route exact path="/owners" render={props => {
        if (hasUser) {
          return <OwnerList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />

      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

    </React.Fragment>
  )
};

export default ApplicationViews;