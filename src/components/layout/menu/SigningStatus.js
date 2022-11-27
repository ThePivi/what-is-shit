import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import Dropdown from 'react-bootstrap/Dropdown';

import SigningModal from "../../modal/SigningModal";

import "./SigningStatus.css"

function SigningStatus(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [signingUp, setSigningUp] = useState(false);

    function logInHandle() {
        loggedIn ? setLoggedIn(false) : setLoggedIn(true);
    }

    function showSignInHandle() {
        showSignIn ? setShowSignIn(false) : setShowSignIn(true);
    }

    function switchSignInAndSignUpHandle() {
        signingUp ? setSigningUp(false) : setSigningUp(true);
    }

    return (
        <div>
            {loggedIn ?
                <Dropdown className="btn-primary">
                    <Dropdown.Toggle className="after-display-none navbar-nav" id="dropdown-basic">
                        <img className="icon" src={props.imageUrl} />
                        &nbsp;ProfileName
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logInHandle}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                :
                <button className="btn btn-primary" onClick={showSignInHandle} >
                    <ul className="navbar-nav me-auto">
                        <FontAwesomeIcon className="hidden icon" icon={faArrowRightToBracket} />
                        &nbsp;signIn/signUp
                    </ul>
                </button>
            }
            {showSignIn ?
                <SigningModal
                    signingUp={signingUp}
                    switch={switchSignInAndSignUpHandle}
                    show={showSignInHandle}
                    logIn={logInHandle}
                />
                :
                null
            }
        </div>
    );
}

export default SigningStatus;