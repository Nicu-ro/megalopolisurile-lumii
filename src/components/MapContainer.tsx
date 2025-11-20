import markers, { CustomMarker } from "@/data/mapData";
import { useRouter } from "next/navigation";
import "@/app/globals.css";

import {
    GoogleMap,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";

const MapContainer: React.FC = () => {
    const router = useRouter();

    // ---- GOOGLE MAP LOADER ----
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        language: "ro",
        region: "RO",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    // 2. RETURN AFTER ALL HOOKS
    if (!isLoaded) return (
        <div className="map-container-loading">
            <span>
                Loading map...
            </span>
        </div>
    );

    // ---- MARKER CLICK ----
    const handleMarkerClick = (marker: CustomMarker) => {
        router.replace(`/${marker.urlTitle}`);
    };

    return (
        <div>
            <GoogleMap
                zoom={3}
                center={{ lat: 44.4268, lng: 26.1025 }}
                mapContainerStyle={{
                    height: "calc(100dvh - 60px - -15px - 40px)",
                    width: "100%",
                }}
                options={{
                    mapTypeId: "hybrid",
                    disableDefaultUI: true,
                    zoomControl: true,
                    fullscreenControl: false,
                    streetViewControl: true,
                    mapTypeControl: false,
                    gestureHandling: "greedy",
                    scrollwheel: true,
                    minZoom: 2,
                    backgroundColor: "#000000",
                    restriction: {
                        latLngBounds: {
                            north: 85,    // maximum latitude
                            south: -85,   // minimum latitude
                            west: -180,
                            east: 180,
                        },
                        strictBounds: false, // if true, user cannot move outside
                    }, 
                    styles: [
                        {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{ visibility: "off" }],
                        },
                        {
                            featureType: "administrative.land_parcel",
                            elementType: "labels",
                            stylers: [{ visibility: "off" }],
                        },
                        {
                            featureType: "road",
                            elementType: "labels",
                            stylers: [{ saturation: -20 }, { lightness: 10 }],
                        },
                    ],
                }}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                        icon={{
                            url: "/imgs/map-pin.svg",
                            scaledSize: new google.maps.Size(35, 35),
                            anchor: new google.maps.Point(17, 35),
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    );
};

export default MapContainer;
