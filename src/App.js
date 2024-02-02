import './styles.css'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from 'react-leaflet'
import mapData from './data'

import MarkerClusterGroup from 'react-leaflet-cluster'

import { Icon, divIcon, point } from 'leaflet'

// create custom icon
const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854853.png',
  iconSize: [38, 38],
})

// create custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  })
}

export default function App() {
  return (
    <MapContainer center={mapData.center} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {mapData.markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <LayersControl position="topright">
        {mapData.layers.map((layer) => (
          <LayersControl.Overlay name={layer.title}>
            <TileLayer attribution={layer.attribute} url={layer.link} />
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  )
}
