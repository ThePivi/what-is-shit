import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import SigningStatus from "./SigningStatus";
import SearchField from "./SearchField";
import ArticleTypeDropdown from "./ArticleTypeDropdown";

import "./MainMenu.css"

const articleTypeList = [
    { id: 0, name: "Games"},
    { id: 1, name: "Movies"}
];

const imageUrl = "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/118343719_1758645397608074_5920063687015986170_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nK2z7ttVorsAX9-huTi&_nc_ht=scontent-nrt1-1.xx&oh=00_AfB_2xh-jR3_Z06084BQGYrbhEEy37s8ox4ehG0JFe0r9w&oe=63A19AAF";
const planToRradCounterWithSubscriprion = "0";

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
                                return (<ArticleTypeDropdown key={articleType.name + articleType.id} articleType={articleType} />);
                            })}
                            <NavLink className="nav-link" to="/new">Article Editor</NavLink>
                            <NavLink className="nav-link" to="/plantoread">
                                PlanToRead<Badge bg="warning" >{planToRradCounterWithSubscriprion}</Badge>
                            </NavLink>
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