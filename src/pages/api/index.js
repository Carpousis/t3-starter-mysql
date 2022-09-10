import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApitKey: process.env.NEXT_PUBLIC_API_KEY,
    });
    if (!isLoaded) 
        return <div>Skating around...</div>;
            return <Map />;
}

function Map() {
    const center = useMemo(() => ({lat: 38.9072, lng:77.0369}), []);
    return <GoogleMap zoom={10} 
    center = {center} 
    mapContainerClassName="map-mapContainer"
    >
        <Marker position={{lat: 38.9072, lng:77.0369}} />
    </GoogleMap>;
}
