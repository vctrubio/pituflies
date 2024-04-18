

const CatchPhrase = () => {
    return (
        <div>
            For a cooler planet
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
            Wareme Logo
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
