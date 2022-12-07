import { useRef } from "react";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ModalSaveOneRecord(props) {
    const modalImputValue = useRef();

    function saveRecordToSpecifiedPath () {
        const recordData = {
            id:0,
            name:modalImputValue.current.value
        };
        
        fetch (
            props.pathToSave,
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
                <Modal.Title>{"Add new " + props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {props.modalTitle + ": "} <input type="text" ref={modalImputValue} />
                    <Button variant="primary" onClick={saveRecordToSpecifiedPath}>
                        {"Save " + props.modalTitle}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );

}

export default ModalSaveOneRecord;