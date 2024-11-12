import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getTipos from "@/actions/get-tipos";
import Link from "next/link";
import NavbarActions from "./navbar-actions";

const Navbar = async () => { 
    
    const tipos = await getTipos();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px/-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl"> Tienda</p>
                    </Link>
                    <MainNav data={tipos}/>
                    <NavbarActions/>
                </div>
            </Container> 
        </div>
    ) 
}

export default Navbar;