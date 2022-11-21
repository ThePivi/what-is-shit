import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import SigningModal from "../../modal/SigningModal";

import "./SigningStatus.css"

function SigningStatus(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [signingUp, setSigningUp] = useState(false);

    function signInHandle () {
        setShowSignIn(true);
    }

    return (
        <div>
            {loggedIn ?
                <NavLink className="nav-link" to="/profile">
                    <ul className="navbar-nav me-auto">
                        <img className="icon" src={props.imageUrl} />
                        ProfileName
                    </ul>
                </NavLink>
                :
                <button className="btn btn-primary" onClick={signInHandle} >
                    <ul className="navbar-nav me-auto">
                        <FontAwesomeIcon className="hidden icon" icon={faArrowRightToBracket} />
                        &nbsp;signIn/signUp
                    </ul>
                </button>
            }
            {showSignIn ?
                <SigningModal />
                :
                null
            }
        </div>
    );
}

export default SigningStatus;