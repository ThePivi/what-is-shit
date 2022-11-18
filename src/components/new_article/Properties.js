import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

import RadioGroup from "../common/RadioGroup";
import FileUpload from "../common/FileUpload";
import RangeHorizontal from "../common/RangeHorizontal";

function Properties(props) {
    const [articleType, setArticleType] = useState();

    const articleTypeList = [
        { id: 0, name: "Game" },
        { id: 1, name: "Movie" },
        { id: 2, name: "" },
    ];

    function radioArticleTypeHandler(event) {
        setArticleType(event.target.value);
        props.articleType.current.value = event.target.value;
    }

    function rangeRatingHadler(event) {
        props.ratingList.current.value[event.target.id].value = event.target.valueAsNumber;
    }

    function modalAddNewRecord(event) {
        event.preventDefault();
        console.log("Open a generic modal for adding a new " + event.target.id);
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
                <button className="btn btn-outline-primary float-end" id="articletype" onClick={modalAddNewRecord}>
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
                    <button className="btn btn-outline-primary float-end" id="ratingtype" onClick={modalAddNewRecord}>
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
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={props.onlineRequired}/>
            </div>
            <div>
                <label>ClickBait:</label>
                <input className="form-control" type="text" ref={props.clickBait}/>
            </div>
            <div className="form-group">
                <label>Zsanra lista:</label>
                <select multiple="true" className="form-select" id="exampleSelect2" ref={props.genreList}>
                    <option>beégetett1</option>
                    <option>beégetett2</option>
                    <option>beégetett3</option>
                    <option>beégetett4</option>
                    <option>beégetett5</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary">Save Button</button>
                <div className="form-check form-switch float-end">
                    <label htmlFor="Online required" label className="form-check-label text-warning">Published</label>
                    <input className="form-check-input border-warning" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
            </div>
        </div>
    );
}

export default Properties;