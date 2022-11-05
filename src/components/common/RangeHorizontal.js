import { useState } from "react";

function RangeHorizontal(props) {
    const [rangeValue, setRangeValue] = useState(props.range.value?props.range.value:0);

    function updateRange (event) {
        setRangeValue (event.target.value);
        props.setValue (event);
    }

    return (
        <div>
            <label htmlFor={props.range.name} className="form-label">{props.range.name}</label>
            <label className="float-end">{rangeValue}%</label>
            <input 
                type="range" 
                className="form-range" 
                id={props.range.id} 
                value={rangeValue} 
                onChange={updateRange}></input>
        </div>
    );
}

export default RangeHorizontal;