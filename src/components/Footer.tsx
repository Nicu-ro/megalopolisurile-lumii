import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <Link href="https://www.traianvuia.ro/">
                © {year} Liceul Traian Vuia
            </Link>
        </footer>
    );
}