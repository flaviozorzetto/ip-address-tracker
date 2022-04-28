import React from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from './images/marker-icon.png';
import shadowIcon from './images/marker-shadow.png';

let DefaultIcon = L.icon({
   iconUrl: icon,
   shadowUrl: shadowIcon,
});

L.Marker.prototype.options.icon = DefaultIcon;
function ChangeView({ center, zoom }) {
   const map = useMap();
   map.setView(center, zoom);
   return null;
}

export default class LeafletManager extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <MapContainer
            center={[this.props.coordinates.lat, this.props.coordinates.lng]}
            zoom={13}
            scrollWheelZoom={true}
         >
            <ChangeView
               center={[this.props.coordinates.lat, this.props.coordinates.lng]}
            />
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
               position={[
                  this.props.coordinates.lat,
                  this.props.coordinates.lng,
               ]}
            >
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </MapContainer>
      );
   }
}
