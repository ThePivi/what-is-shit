import { Link } from "react-router-dom";

import "./Profile.css"

function Profile(props) {
    return (
        <div>
            <Link className="nav-link" to="/profile">
                <ul className="navbar-nav me-auto">
                    
                        <img className="icon" src={props.imageUrl} />
                        ProfileName
                    
                </ul>
            </Link>
        </div>
    );
}

export default Profile;