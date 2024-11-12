"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tipo } from "@/types";
 
interface MainNavProps {
    data: Tipo[];
};
const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname();

    console.log("Datos en MainNav:", data); // Verifica que `data` tenga los datos correctos

    const routes = data.map((route) => ({
        href: `/Tipo/${route.tipid}`,
        label: route.tipnombre,
        active: pathname === `/Tipo/${route.tipid}`,
    }));

    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-primary',
                        route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav;
