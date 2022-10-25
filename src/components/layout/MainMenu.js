import { Link } from "react-router-dom";

function MainMenu () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div><Link to="/profile">Profile</Link></div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li>
                                <Link className="nav-link active" to="/">News</Link>
                            </li>
                            <li>
                                <div className="btn-group" role="group">
                                <button className="btn btn-primary btn-sm"><Link className="nav-link" to="/games">Games</Link></button>
                                
                                <button className="btn btn-primary btn-sm dropdown-toggle nav-link"></button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                                </div>
                            </li>
                            <li>
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/new">Article Editor</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Day/Night</label>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainMenu;