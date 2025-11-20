import markers from "@/data/mapData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButtonWrapper from "@/components/BackButtonWrapper";
import { notFound } from "next/navigation";
import PresentationFrame from "@/components/PresentationFrame";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const marker = markers.find((m) => m.urlTitle === id);

    if (!marker) return notFound();

    return (
        <div className="page-root">
            <Header title={marker.name} />

            <div className="page-content">
                <div className="back-button-container">
                    <BackButtonWrapper />
                </div>

                <p className="marker-info">
                    {marker.info}
                </p>

                {marker.canvaPresentations.map((presentation, index) => (
                    <PresentationFrame key={index} url={presentation.url} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
