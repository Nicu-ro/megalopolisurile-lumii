import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer footer-layout">
            {/* Left Side: School Info (This will shrink on mobile) */}
            <div className="info-text footer-info-left">
                <span>Liceul "Traian Vuia" Craiova</span>
                <span>Clasa: XI-C</span>
                <span>Specializarea: Matematica-Informatica</span>
                <span>Proiect realizat de Galbinu Nicusor</span>
            </div>

            {/* Middle Side: Copyright (This stays centered) */}
            <div className="footer-center">
                <Link href="https://www.traianvuia.ro/">
                    © {year} Liceul Traian Vuia
                </Link>
            </div>

            {/* Right Side: Empty spacer to keep the middle balanced */}
            <div className="footer-spacer"></div>
        </footer>
    );
}