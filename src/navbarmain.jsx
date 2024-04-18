

const CatchPhrase = () => {
    return (
        <div>
            <img src="src/assets/slogan_negro_mayuscula.png" alt="Warme, For a cooler planet"
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
            <img src="src/assets/warme_negro.png" alt="Warme, For a cooler planet"
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
