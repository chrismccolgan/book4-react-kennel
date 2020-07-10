import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ city: "", state: "" });
  const [isLoading, setIsLoading] = useState(true);
  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          city: location.city,
          state: location.state
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          <span className="card-locationname">{location.city}, {location.state}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;