import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import RadioGroup from "../common/RadioGroup";
import FileUpload from "../common/FileUpload";
import RangeHorizontal from "../common/RangeHorizontal";
import ModalSaveOneRecord from "../common/ModalSaveOneRecord";

function Properties(props) {
    const [articleType, setArticleType] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInput, setModalInputs] = useState({
        modifiedItem:{},
        title:"",
        dbUrl:"",
        tableName:""
    });

    const articleTypeList = [
        { id: 0, name: "Game" },
        { id: 1, name: "Movie" },
        { id: 2, name: "" },
    ];

    const genreList = [
        { id: 0, name: "Adventure" },
        { id: 1, name: "Startegy" },
        { id: 2, name: "First Person Shooter" },
    ]

    function radioArticleTypeHandler(event) {
        setArticleType(event.target.value);
        props.articleType.current.value = event.target.value;
    }

    function rangeRatingHadler(event) {
        props.ratingList.current.value[event.target.id].value = event.target.valueAsNumber;
    }

    function addNewArticleTypeHandler (event) {
        event.preventDefault();
        modalAddNewRecord("Article type");
    }

    function addNewRatingHandler (event) {
        event.preventDefault();
        modalAddNewRecord("Rating type");
    }

    function addNewGenreHandler (event) {
        event.preventDefault();
        modalAddNewRecord("Genre type");
    }

    function modalAddNewRecord(title) {
        setModalInputs({
            modifiedItem:{id:22, name:"pipacs"},
            title:title,
            dbUrl:"https://wiss-e883e-default-rtdb.europe-west1.firebasedatabase.app/",
            tableName:title.replace(" ","").toLowerCase() + '.json'
        });
        changeModalVisibility();
    }

    function changeModalVisibility () {
        modalVisible?setModalVisible(false):setModalVisible(true);
    }

    return (
        <div className="col-lg-4 offset-lg-0">
            <div>
                <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                    <FontAwesomeIcon className="hidden" icon={faCaretLeft} />
                </button>
                <button className="btn btn-outline-dark"><FontAwesomeIcon className="hidden" icon={faCaretRight} /></button>
                <small>Oldal panel elrejtés/megjelenítés!</small>
            </div>
            <div>
                <RadioGroup setRadioValue={radioArticleTypeHandler} groupName="articleType" radioList={articleTypeList} />
                <button className="btn btn-outline-primary float-end" id="articletype" onClick={addNewArticleTypeHandler}>
                    <FontAwesomeIcon className="hidden" icon={faPlus} />
                </button>
            </div>
            <div>
                <label>Title:</label>
                <input className="form-control" type="text" ref={props.title} />
            </div>
            <FileUpload setFile={props.smallPicture} name="Tumbnail" />
            <FileUpload setFile={props.bigPicture} name="High Resolution" />
            <div>
                <div>
                    <label className="form-label">Ratings:</label>
                    <button className="btn btn-outline-primary float-end" id="ratingtype" onClick={addNewRatingHandler}>
                        <FontAwesomeIcon className="hidden" icon={faPlus} />
                    </button>
                </div>
                {props.ratingList.current.value.map((rating) => {
                    return (
                        <RangeHorizontal setValue={rangeRatingHadler} range={rating} />
                    );
                })}
            </div>
            <div className="form-check form-switch">
                <label htmlFor="Online required" label className="form-check-label">Online required</label>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={props.onlineRequired} />
            </div>
            <div>
                <label>ClickBait:</label>
                <input className="form-control" type="text" ref={props.clickBait} />
            </div>
            <div className="form-group">
                <label>Genre List:</label>
                <button className="btn btn-outline-primary float-end" id="genretype" onClick={addNewGenreHandler}>
                    <FontAwesomeIcon className="hidden" icon={faPlus} />
                </button>
                <select multiple="true" className="form-select" id="exampleSelect2" ref={props.genreList}>
                    {genreList.map((genre) => {
                        return (<option key={genre.name + genre.id}>{genre.name}</option>);
                    })}
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary">Save Button</button>
                <div className="form-check form-switch float-end">
                    <label htmlFor="Online required" label className="form-check-label text-warning">Published</label>
                    <input className="form-check-input border-warning" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
            </div>
            <ModalSaveOneRecord 
                modalInput={modalInput}
                visible={modalVisible} 
                show={changeModalVisibility} 
            />
        </div>
    );
}

export default Properties;