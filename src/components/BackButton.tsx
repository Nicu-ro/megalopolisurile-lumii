"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/")}
            style={{
                /* Theme-aware colors from your CSS variables */
                backgroundColor: "var(--bg-card)", 
                color: "var(--header-title)",
                
                /* Padding & Spacing */
                padding: "10px 20px",
                marginTop: "20px",    /* Added padding/margin at the top */
                marginBottom: "20px",
                
                /* Styling */
                borderRadius: "6px",
                border: "1px solid var(--border-color)", 
                cursor: "pointer",
                fontWeight: "600",
                
                /* Smooth theme switching */
                transition: "all var(--transition-speed) ease", 
            }}
        >
            ← Înapoi la hartă
        </button>
    );
}