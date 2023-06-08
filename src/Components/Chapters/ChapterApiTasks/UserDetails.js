import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder/lib';
import 'react-placeholder/lib/reactPlaceholder.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function UserDetails({ moreInfo }) {
	const [ready, setReady] = useState(false);

	let DefaultIcon = L.icon({
		iconUrl: icon,
		shadowUrl: iconShadow,
	});

	L.Marker.prototype.options.icon = DefaultIcon;
	
	const position = [51.45102, 0.01266];
	useEffect(() => {
		setTimeout(() => {
			setReady(true);
		}, 3000);
	}, []);
	return (
		<div className='user-details'>
			<ReactPlaceholder rows={8} ready={ready}>
				<div className='info'>
					<h3>User details:</h3>
					<p>Address:</p>
					<p>City: {moreInfo.address.city}</p>
					<p>Street: {moreInfo.address.street}</p>
					<p>Country: {moreInfo.address.country}</p>
					<p>Email: {moreInfo.emailUser}</p>
				</div>
				<div className='map'>
					<MapContainer
						className='leaflet'
						center={[51.505, -0.09]}
						zoom={13}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[51.505, -0.09]}>
							<Popup>I'm here!</Popup>
						</Marker>
					</MapContainer>
				</div>
			</ReactPlaceholder>
		</div>
	);
}
export default UserDetails;
