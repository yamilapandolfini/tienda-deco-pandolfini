import './NavBar.css';

const NavBar = () =>{
    return(
        <nav className="NavbarItems">
            <h1>AutumnVibes ♡</h1>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Sales</a>
                </li>
                <li>
                    <a href="#">Contactos</a>
                </li>
            </ul>
        </nav>
    )
        
};

export default NavBar;