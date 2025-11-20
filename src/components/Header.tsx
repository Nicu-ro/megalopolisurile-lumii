import Image from "next/image";
import logoVuia from "../../public/imgs/logo-liceu.png";
import Link from "next/link";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <header className="site-header">
            <Link href="/" className="logo-wrapper">
                <Image
                    src={logoVuia}
                    alt="Liceul Traian Vuia Logo"
                    width={100}
                    height={100}
                    className="logo-image"
                />
            </Link>

            <h1 className="header-title">{title}</h1>

            <div className="info-text">
                <span>Liceul: „Traian Vuia” Craiova</span>
                <span>Clasa: XI-C</span>
                <span>Specializarea: Matematica-Informatica</span>
                <span>Profesor: Toma Denisa, Țenea Elena</span>
            </div>
        </header>
    );
}
