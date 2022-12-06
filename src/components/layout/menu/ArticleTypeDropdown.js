import { generatePath, NavLink } from 'react-router-dom';
import SplitButton from 'react-bootstrap/SplitButton';

function fetchArticleTypeGenreList (articleTypeName) {
    let result = [];
    switch (articleTypeName) {
        case "Movies":
            result = [{id:0, name:"Action"},{id:0, name:"Sci-Fi"}];
            break;
        case "Games":
            result = [{id:0, name:"Strategy"},{id:0, name:"FirstPersonShooter"}];
            break;
    }
    return result;
}

function ArticleTypeDropdown(props) {
    return (
        <SplitButton
            key={props.articleType.name}
            className="nav-item"
            title={
                <NavLink className="nav-link split-button-navlink" to={"/" + props.articleType.name}>
                    {props.articleType.name}
                </NavLink>
            }>
            {fetchArticleTypeGenreList(props.articleType.name).map(genre => {
                return (
                    <NavLink 
                        key={genre.name + genre.id} 
                        className="dropdown-item" 
                        to={"/" + props.articleType.name + "/" + genre.name}
                    >
                        {genre.name}
                    </NavLink>
                )
            })}
        </SplitButton>
    );
}

export default ArticleTypeDropdown;