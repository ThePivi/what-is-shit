import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ModalSaveOneRecord(props) {
    const [inputValue, setInputValue] = useState(props.modalInput.modifiedItem.name);

    function inputChangeHandle (event) {
        setInputValue(event.target.value);
    }

    function saveRecordToSpecifiedPath() {
        let id = 0;
        if (props.modalInput.modifiedItem.id) {
            id = props.modalInput.modifiedItem.id;
        }

        const recordData = {
            id: id,
            name: inputValue
        };

        fetch(
            props.modalInput.dbUrl + props.modalInput.tableName,
            {
                method: 'POST',
                body: JSON.stringify(recordData),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        );
        props.show();
    }

    return (
        <Modal show={props.visible} onHide={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>{"Save " + props.modalInput.title + " to database"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {props.modalInput.title + ": "}
                    <input type="text" value={inputValue} onChange={inputChangeHandle} />
                    <Button variant="primary btn-sm float-end" onClick={saveRecordToSpecifiedPath}>
                        {"Save " + props.modalInput.title}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );

}

export default ModalSaveOneRecord;