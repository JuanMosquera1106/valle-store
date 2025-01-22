import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getTipos from "@/actions/get-tipos";
import Link from "next/link";
import NavbarActions from "./navbar-actions";

const Navbar = async () => { 
    
    const tipos = await getTipos();

    return (
        <div>
            <Container>
                <div className="relative px-4 sm:px-6 lg:px/-8 flex h-16 items-center">
                    <MainNav data={tipos}/>
                    <NavbarActions/>
                </div>
            </Container> 
            <div className="h-2 w-12/12 bg-brownValle rounded-full mr-10 ml-10 sm: mr-2 ml-2"/>
        </div>

    ) 
}

export default Navbar;