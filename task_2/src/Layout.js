import {ReactComponent as Logo} from './logo.svg';
import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <aside>
                <Logo/>
                <Link to="/">John Doe</Link>
                <menu>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </menu>
            </aside>
            <Outlet/>
        </div>
    );
}

export default Layout;