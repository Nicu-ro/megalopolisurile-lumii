"use client";
import React, { useState, useMemo } from "react";
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
    
    const [activeFilter, setActiveFilter] = useState<'all' | 'megalopolis' | 'climate'>('all');

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        language: "ro",
        region: "RO",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    });

    const filteredMarkers = useMemo(() => {
        if (activeFilter === 'all') return markers;
        return markers.filter((m: any) => m.type === activeFilter);
    }, [activeFilter]);

    if (!isLoaded) return (
        <div className="map-container-loading">
            <span>Se încarcă harta...</span>
        </div>
    );

    const handleMarkerClick = (marker: CustomMarker) => {
        router.replace(`/${marker.urlTitle}`);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            
            
            <div className="filter-overlay">
                <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
                    onClick={() => setActiveFilter('all')}
                >Toate</button>
                <button 
                    className={`filter-btn ${activeFilter === 'megalopolis' ? 'active' : ''}`} 
                    onClick={() => setActiveFilter('megalopolis')}
                >Megalopolisuri</button>
                <button 
                    className={`filter-btn ${activeFilter === 'climate' ? 'active' : ''}`} 
                    onClick={() => setActiveFilter('climate')}
                >Tipuri de medii</button>
            </div>

            <GoogleMap
                zoom={3}
                center={{ lat: 20, lng: 0 }}
                mapContainerStyle={{
                    height: "calc(100dvh - 60px - 124px - 40px)",
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
                }}
            >
                {filteredMarkers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                        icon={
                            marker.type === 'megalopolis'
                                ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" 
                                : "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        }
                    />
                ))}
            </GoogleMap>
        </div>
    );
};

export default MapContainer;