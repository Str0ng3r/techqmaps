import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const Map = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    >
      <Marker position={{ lat: 40.756795, lng: -73.954298 }} />
    </GoogleMap>
  ));
export const Main = () => {

    return (
        <main>
            <Map
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
        </main>
    )
}