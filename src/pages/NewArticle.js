import { useRef } from "react";

import Editor from "../components/new_article/Editor"
import Properties from "../components/new_article/Properties"

import "./NewArticle.css"

function NewArticle() {
    const titleImputRef = useRef();
    const articleTypeRef = useRef({ value: "" });
    const smallPictureRef = useRef();
    const bigPictureRef = useRef();
    const ratingListRef = useRef({
        value: [
            { id: 0, name: "Graphics", value: 10 },
            { id: 1, name: "Music", value: 0 },
            { id: 2, name: "Sounds", value: 0 },
            { id: 3, name: "Voice", value: 0 },
            { id: 4, name: "Story", value: 0 },
            { id: 5, name: "Controlls", value: 0 },
            { id: 6, name: "Replayability", value: 0 },
        ]
    });
    const onlineRequiredRef = useRef();
    const clickBaitRef = useRef();
    const genreListRef = useRef();

    function sendData(event) {
        event.preventDefault();

        const genreList = [];
        
        for(let selectedOption of genreListRef.current.selectedOptions) {
            
            genreList.push ({id: selectedOption.index, value: selectedOption.value});
            
        };
    
        const articleData = {
            articleType: articleTypeRef.current.value,
            title: titleImputRef.current.value,
            smallPictureUrl: smallPictureRef.current.value,
            bigPictureUrl: bigPictureRef.current.value,
            ratingList: ratingListRef.current.value,
            onlineRequired: onlineRequiredRef.current.checked,
            clickBait: clickBaitRef.current.value,
            genreList: genreList
        }

        console.log(articleData);

        fetch (
            'https://wiss-e883e-default-rtdb.europe-west1.firebasedatabase.app/article.json',
            {
                method: 'POST',
                body: JSON.stringify(articleData),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        );
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
                    onlineRequired={onlineRequiredRef}
                    clickBait={clickBaitRef}
                    genreList={genreListRef}
                />

            </div>
        </form>
    );
}

export default NewArticle;