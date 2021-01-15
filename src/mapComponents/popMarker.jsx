/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import PinPopup from './PinPopup';

const style = {
  map: {
    height: '400px',
    width: '100%',
  },
};

export default function popMarker() {
  const [markers, setMarkers] = useState([]);
  //   constructor() {
  //     super();
  //     this.state = {
  //       markers: [[19.4100819, -99.1630388]]
  //     };
  //   }
  const addMarker = (e) => {useMapEvents({
    click() {
    setMarkers(...markers, e.latlng)}
  }

  return (
    <>
      {markers.map((position, idx) => (
        <Marker key={`marker-${idx}`} position={position}>
          <PinPopup />
        </Marker>
      ))}
    </>
  );
}
