import Link from 'next/link';
import { getAllPages } from "@/lib/menu-api";

export default async function Accueil() {
    const pages = await getAllPages();

    return (
        <div>
            <h1>Liste de tout les effets</h1>
            <nav>
                <ul>
                    {pages.map((page) => (
                        <li key={page.id}>
                            <Link href={page.slug}>
                                {page.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}