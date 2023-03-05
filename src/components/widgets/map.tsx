import {useMemo, useState} from "react";
import {GoogleMap, useLoadScript, MarkerF, InfoWindow} from "@react-google-maps/api";
import './map.scss';

export type Coordinates = {
	lat: number;
	lng: number;
}

interface MapProps {
	location: Coordinates,
	mapContainerClassName: string
}

export function Map({location, mapContainerClassName}: MapProps) {
	// const position = useMemo(() => ({lat: 44.3930264371725, lng: 26.124782628868132}), []);
	const googleMapsApiKey = 'AIzaSyBy8Wt8yPRvwT0bz7vdmdiz7OlnDUB-rP4';

	const {isLoaded} = useLoadScript({
		googleMapsApiKey: googleMapsApiKey
	})

	if (!isLoaded) return <div>Loading...</div>;
	return <GoogleMap
		zoom={15}
		center={{lat: location.lat, lng: location.lng}}
		mapContainerClassName={mapContainerClassName}
	>
		<MarkerF position={{lat: location.lat, lng: location.lng}} title="Şcoala Română de Înot"/>
	</GoogleMap>;
}