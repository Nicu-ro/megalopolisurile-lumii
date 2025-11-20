"use client";
import { useState } from "react";

interface PresentationFrameProps {
    url: string;
}

export default function PresentationFrame({ url }: PresentationFrameProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="presentation-wrapper">
            {!loaded && <div className="iframe-skeleton" />}
            <iframe
                src={url}
                allowFullScreen
                className={`presentation-iframe ${
                    loaded ? "visible" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
