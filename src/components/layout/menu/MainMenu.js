import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SplitButton from 'react-bootstrap/SplitButton';

import SigningStatus from "./SigningStatus";
import SearchField from "./SearchField";

import "./MainMenu.css"

const articleTypeList = [
    { id: 0, name: "Games", genreList: [{id:0, name:"Strategy"},{id:0, name:"FirstPersonShooter"}]},
    { id: 1, name: "Movies", genreList: [{id:0, name:"Action"},{id:0, name:"Sci-Fi"}] }
];

const imageUrl = "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/118343719_1758645397608074_5920063687015986170_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nK2z7ttVorsAX9-huTi&_nc_ht=scontent-nrt1-1.xx&oh=00_AfB_2xh-jR3_Z06084BQGYrbhEEy37s8ox4ehG0JFe0r9w&oe=63A19AAF";

function MainMenu() {
    return (
        <header className="navbar-placeholder">
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <SigningStatus imageUrl={imageUrl} />
                <Container fluid>
                    <Navbar.Collapse>
                        <Nav>
                            <NavLink className="nav-link" to="/">News</NavLink>
                            {articleTypeList.map(articleType => {
                                return (
                                    <SplitButton
                                        className="nav-item"
                                        title={
                                            <NavLink className="nav-link split-button-navlink" to={"/" + articleType.name} >
                                                {articleType.name}
                                            </NavLink>
                                        }>
                                        {articleType.genreList.map (genre => {
                                            return (
                                                <NavLink className="dropdown-item" to={"/" + articleType.name + "/" + genre.name}>
                                                    {genre.name}
                                                </NavLink>
                                            )
                                        })}
                                    </SplitButton>
                                )
                            })}
                            <NavLink className="nav-link" to="/new">Article Editor</NavLink>
                            <NavLink className="nav-link" to="/plantoread">PlanToRead</NavLink>
                            <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <SearchField />
                    <div className="form-check form-switch margin-left">
                        <input className="form-check-input btn-primary" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="day-night-textcolor" htmlFor="flexSwitchCheckDefault">Day/Night</label>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}

export default MainMenu;