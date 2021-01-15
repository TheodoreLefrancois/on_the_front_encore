/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMaker';

export default function Locator() {
  return (
    <>
      <MapContainer
        style={{ height: '90vh', width: '100%' }}
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
}
