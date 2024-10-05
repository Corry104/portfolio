import { useState } from "react";
import './map.scss';
import { MapContainer, Marker, TileLayer, Popup, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import businessImg from '../../assets/images/business_pic.jpg';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';



export const Map: React.FC = () => {
    const latitude = 34.4400;
    const longitude = -118.571335;

    let DefaultIcon = Leaflet.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });

    Leaflet.Marker.prototype.options.icon = DefaultIcon;

    const LocationMarker = () => {
        const [position, setPosition] = useState({ lat: 0, lng: 0 });
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }


    const createCustomIcon = () => {
        const iconHtml = `
        <div style="width: 40px; height: 40px; position: relative;">
          <div style="background-color: white; border-radius: 50%; width: 40px; height: 40px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
            <img src="${businessImg}" style="width: 80%; height: 80%; border-radius: 50%; object-fit: cover; z-index:2">
          </div>
          <div style="width: 0; height: 0; border-left: 18px solid transparent; border-right: 18px solid transparent; border-top: 20px solid white; position: absolute; bottom: -9px; left: 50%; transform: translateX(-50%);"></div>
        </div>
      `;

        const customIcon = Leaflet.divIcon({
            className: "custom-icon",
            html: iconHtml,
            iconSize: [40, 60],
        });

        return customIcon;
    };


    return (
        <>
            <MapContainer
                style={{ height: 500, width: "100%" }}
                center={[latitude, longitude]}
                zoom={13}
                minZoom={3}
                scrollWheelZoom={true}
                className={`map-container`}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} icon={createCustomIcon()}>
                    <Popup>Hey 👋 I am here 😃</Popup>
                </Marker>

                <LocationMarker />

            </MapContainer>
        </>
    )
}