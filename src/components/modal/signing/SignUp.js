import Form from 'react-bootstrap/Form';


function SignUp() {
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Your Password" />
                <Form.Control type="password" placeholder="Same Password again" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eula">
                <Form.Check type="checkbox" label="Accept EULA" />
            </Form.Group>
        </>
    );
}

export default SignUp;