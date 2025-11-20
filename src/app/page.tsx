"use client";

import MapContainer from "@/components/MapContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div className="page-root">
            <Header title="Megalopolisurile Terrei" />

            <div className="map-card">
                <MapContainer />
            </div>

            <Footer />
        </div>
    );
}
