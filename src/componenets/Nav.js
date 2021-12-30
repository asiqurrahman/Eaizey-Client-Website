import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav class="nav">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div class="navlogo">
                        <a class="navbar-brand"><a href="#">Eaizey</a></a>
                    </div>
                </Link>
                <div class="navlists">
                    <Link to="about" style={{ textDecoration: 'none' }}>
                        <p><a href="#about">About</a></p>
                    </Link>
                    <Link to="services" style={{ textDecoration: 'none' }}>
                        <p><a href="#services">Services</a></p>
                    </Link>
                    <Link to="contact" style={{ textDecoration: 'none' }}>
                        <p><a href="#form">Contact Us</a></p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav
