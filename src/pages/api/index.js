// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home() {
//     const { isLoaded } = useLoadScript({
//         googleMapsApitKey: process.env.NEXT_PUBLIC_API_KEY,
//     });

//     if (!isLoaded) return <div>Skating around...</div>;
//     return <Map />;
 
// const Map () => {
//     return <GoogleMap 
//         zoom = {10} 
//         center = {{lat:40, lng:,40}} 
//         mapContainerClassName="map-container">
//     </GoogleMap>
// };
// }