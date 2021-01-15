import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import PinPopup from './PinPopup';

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <PinPopup />
    </Marker>
  );
}
