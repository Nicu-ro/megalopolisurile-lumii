import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer footer-layout">
         
            <div className="info-text footer-info-left">
                <span>Liceul "Traian Vuia" Craiova</span>
                <span>Clasa: XI-C</span>
                <span>Specializarea: Matematica-Informatica</span>
                <span>Profesori coordonatori: Neacsu Claudia , Toma Denisa</span>
            </div>

           
            <div className="footer-center">
                <Link href="https://www.traianvuia.ro/">
                    © {year} Liceul Traian Vuia
                </Link>
            </div>

        
            <div className="footer-spacer"></div>
        </footer>
    );
}