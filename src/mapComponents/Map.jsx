/* eslint-disable no-console */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Map() {
  const [pins, setPins] = useState([]);

  const api = axios.create({
    baseURL: `http://localhost:3080/api/v1/pin`,
  });

  useEffect(() => {
    api
      .get('/')
      .then((res) => {
        setPins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MapContainer
      style={{ height: '90vh', width: '100%' }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((pin) => (
        <Marker key={pin.id} position={[pin.lat, pin.long]}>
          <Popup>
            <h5>{pin.title}</h5>
            <p>{pin.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
