import Editor from "../components/new_article/Editor"
import Properties from "../components/new_article/Properties"

import "./NewArticle.css"

function NewArticle () {
    return (
        <div className="row margin-12px">
            <Editor />
            <Properties />
        </div>
    );
}

export default NewArticle;