import { Link } from "react-router-dom";

import Profile from "./Profile";
import SearchField from "./SearchField";

const imageUrl="data:image/jpeg;base64,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";

function MainMenu () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Profile imageUrl={imageUrl}/>
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li>
                                <Link className="nav-link active" to="/">News</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="btn-group" role="group">
                                    <Link className="nav-link btn btn-primary btn-sm" to="/games">Games</Link>
                                    <a className="btn btn-primary btn-sm dropdown-toggle nav-link" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/games">Action</Link>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/games">Separated link</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/new">Article Editor</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/plantoread">PlanToRead</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/aboutus">AboutUs</Link>
                            </li>
                        </ul>
                    </div>
                    <SearchField />
                    <div className="form-check form-switch">
                        <input className="form-check-input btn-primary" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Day/Night</label>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainMenu;