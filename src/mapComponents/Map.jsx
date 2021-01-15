/* eslint-disable no-console */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Map() {
  const [pins, setPins] = useState([]);

  // const api = axios.create({
  //   baseURL: `http://localhost:5000/api/v1/roadtrip`,
  // });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/roadtrip/${'1'}/pins`)
      .then((res) => {
        setPins(res.data[0].pin);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
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
      {pins.map((pin) => {
        console.log(pins);
        return (
          <Marker
            key={pin.id}
            position={[parseFloat(pin.long), parseFloat(pin.lat)]}
          >
            <Popup>
              <h5>{pin.title}</h5>
              <p>{pin.description}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
