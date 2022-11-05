import { useRef } from "react";

import Editor from "../components/new_article/Editor"
import Properties from "../components/new_article/Properties"

import "./NewArticle.css"

function NewArticle() {
    const titleImputRef = useRef();
    const articleTypeRef = useRef({value:""});
    const smallPictureRef = useRef();
    const bigPictureRef = useRef();
    const ratingListRef = useRef({value:[
        {id:0, name:"Graphics" ,value:10},
        {id:1, name:"Music" ,value:0},
        {id:2, name:"Sounds" ,value:0},
        {id:3, name:"Voice" ,value:0},
        {id:4, name:"Story" ,value:0},
        {id:5, name:"Controlls" ,value:0},
        {id:6, name:"Replayability" ,value:0},
    ]});

    function sendData(event) {
        event.preventDefault();

        console.log (ratingListRef);
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
                    ratingList={ratingListRef}
                />

            </div>
        </form>
    );
}

export default NewArticle;