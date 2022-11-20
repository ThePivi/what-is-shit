import CardController from "../components/layout/CardController";

function ProfilePage() {
    return (
        <CardController>
            <dev>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                Button - LOGOUT
            </dev>
        </CardController>
    );
}

export default ProfilePage;