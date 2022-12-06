import { useState } from "react";

const profileData = {
    id: 0,
    email: "pivarcsik.peter@gmail.com",
    authorization: "ADMIN",
    name: "Admiral Kunkka",
    profilePicture: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/118343719_1758645397608074_5920063687015986170_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nK2z7ttVorsAX9-huTi&_nc_ht=scontent-nrt1-1.xx&oh=00_AfB_2xh-jR3_Z06084BQGYrbhEEy37s8ox4ehG0JFe0r9w&oe=63A19AAF',
    layoutConfiguration: { margin: 4, columns: 3 },
    achivementList: [0, 2, 33, 41],
    ratingsList: [{ articleId: 0, rating: 90 }, { articleId: 11, rating: 30 }],
    planToReadList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

function ProfilePage() {
    const [editable, setEditable] = useState(false);

    function editableChangeHandler() {
        editable ? setEditable(false) : setEditable(true);
    }

    return (
        <div className="d-flex justify-content-center">
            <fieldset>
                <legend>Profil informations</legend>
                {editable ?
                    <>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                    </>
                    :
                    <>
                        <div className="form-group row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value={profileData.email} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value={profileData.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Profile picture:</label>
                            <div className="col-sm-10">
                                <img className="form-control-plaintext" src={profileData.profilePicture} />
                            </div>
                        </div>
                    </>
                }
                <button className="btn btn-primary" onClick={editableChangeHandler}>Edit profile</button>
            </fieldset>
        </div>
    );
}

export default ProfilePage;