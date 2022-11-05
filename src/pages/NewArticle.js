import { useRef } from "react";

import Editor from "../components/new_article/Editor"
import Properties from "../components/new_article/Properties"

import "./NewArticle.css"

function NewArticle() {
    const titleImputRef = useRef();
    const articleTypeRef = useRef({value:""});
    const smallPictureRef = useRef();
    const bigPictureRef = useRef();

    function sendData(event) {
        event.preventDefault();

        console.log(titleImputRef.current.value);
        console.log(articleTypeRef.current.value);
    }

    return (
        <form onSubmit={sendData}>
            <div className="row margin-12px">

                <Editor />
                <Properties 
                    articleType={articleTypeRef} 
                    title={titleImputRef} 
                    smallPicture={smallPictureRef}
                    bigPicture={bigPictureRef}
                />

            </div>
        </form>
    );
}

export default NewArticle;