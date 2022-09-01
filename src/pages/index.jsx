import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 38.9072,
  lng:77.0369
};

const map = React.useState (null), {

const Map () => {
  return isLoaded ? <GoogleMap (
      mapContainerStyle=containerStyle={containerStyle}
      zoom = {10}
      center = {{lat:38.9072, lng:77.0369}} 
      onLoad={onLoad}
      <marker; position= {{"lat:38.9072", "lng:77.0369}"} />
  </ GoogleMap> <></>
}
};

function Home() {
  const { isLoaded, data: session, status } = useSession({

  })

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <main>
      This is the home page
    </main>
  );
}

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApitKey: process.env.NEXT_PUBLIC_API_KEY,
    });

    if (!isLoaded) return <div>Skating around...</div>;
    return <Map />;
  }