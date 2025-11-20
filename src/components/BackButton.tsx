"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/")}
            style={{
                backgroundColor: "white",
                color: "#348cd0",
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                marginBottom: "20px",
            }}
        >
            ← Înapoi la hartă
        </button>
    );
}
