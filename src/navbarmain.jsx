import logo_warme from "./assets/warme_negro.png"
import logo_slogan from "./assets/slogan_negro_mayuscula.png"

const CatchPhrase = () => {
    return (
        <div>
            <img src={logo_slogan} alt="Warme For a cooler planet"
                style={{ height: '15px' }} />
        </div>
    )
}

const MenuBar = () => {
    return (
        <div className="navbar-menu">
            <div>Home</div>
            <div>Products</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    )
}

const Branding = () => {
    return (
        <div>
            <img src={logo_warme} alt="Warme, For a cooler planet"
                style={{ height: '20px' }} />
        </div>
    )
}

export const NavbarMain = () => {

    return (
        <div className="navbar-main">
            <Branding />
            <MenuBar />
            <CatchPhrase />
        </div>
    )
}
