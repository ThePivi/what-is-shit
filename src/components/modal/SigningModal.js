import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import SignUp from "./signing/SignUp";
import SignIn from "./signing/SignIn";

function SigningModal(props) {
    return (
        <Modal show={true} onHide={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>{props.signingUp ? "SignUp to What'Z Shit" : "SignIn to What'Z Shit"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {props.signingUp ? <SignUp /> : <SignIn />}
                    <Button variant="primary" onClick={props.logIn}>
                        {props.signingUp ? "Register my account":"Log in to my account"}
                    </Button>
                </Form>
            </Modal.Body>
            <Alert key="warning" variant="warning">
                <Alert.Link onClick={props.switch}>
                    Click here to switch to {props.signingUp ? "signIn" : "signUp"}...
                </Alert.Link>
            </Alert>
        </Modal>
    );

}

export default SigningModal;