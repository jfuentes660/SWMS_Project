// src/Components/MapWithRoutes.jsx
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// TEMP data for demo
const bins = [
  { id: 1, position: [39.2662, -84.5167], name: "Bin A" },
  { id: 2, position: [39.2677, -84.5198], name: "Bin B" },
  { id: 3, position: [39.2698, -84.5209], name: "Bin C" },
];

const route = bins.map((bin) => bin.position);

export const MapWithRoutes = () => {
  // TODO: Replace with live data from API
  // const [bins, setBins] = useState([]);

  // useEffect(() => {
  //   const fetchBins = async () => {
  //     try {
  //       const response = await axios.get('https://example.com/api/bins');
  //       setBins(response.data);
  //     } catch (error) {
  //       console.error('Failed to fetch bin data:', error);
  //     }
  //   };
  //   fetchBins();
  // }, []);

  return (
    <MapContainer
      center={[39.2680, -84.5187]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[50vh] w-full rounded-lg mt-6 z-0"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bins.map((bin) => (
        <Marker key={bin.id} position={bin.position}>
          <Popup>{bin.name}</Popup>
        </Marker>
      ))}
      <Polyline positions={route} color="black" />
    </MapContainer>
  );
};

export default MapWithRoutes;
