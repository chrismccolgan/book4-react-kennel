import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import LocationDetail from "./location/LocationDetail";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      {/* Make sure you add the `exact` attribute here */}
      {/* //updated route: `/animals` */}
      <Route exact path="/animals" render={(props) => {
        return <AnimalList {...props} />
      }} />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      {/* Our shiny new route. */}
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/locations" render={(props) => {
        return <LocationList {...props} />
      }} />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          // Pass the locationId to the LocationDetailComponent
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
      }} />
      

      <Route exact
       path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />

      <Route exact
        path="/owners"
        render={props => {
          return <OwnerList {...props} />;
        }}
      />
      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />


    </React.Fragment>
  );
};

export default ApplicationViews;