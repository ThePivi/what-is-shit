import { useState } from "react";

function RadioGroup(props) {
    const [checkedButton, setCheckedButton] = useState();

    function handleClick(event) {
        setCheckedButton(event.target.id);
        props.setRadioValue(event);
    }

    return (
        <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group for "
        >
            {props.radioList.map((buttonProps) => {
                return (
                    <button
                        key={buttonProps.id}
                        id={buttonProps.id}
                        className={checkedButton == buttonProps.id ? "btn btn-primary" : "btn btn-outline-primary"}
                        type="button"
                        value={buttonProps.name}
                        onClick={handleClick}>
                        {buttonProps.name}
                    </button>
                );
            })}
        </div>
    );
}

export default RadioGroup;