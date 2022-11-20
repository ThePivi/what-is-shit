import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchField.css';

function sendSearchData (event) {
        event.preventDefault();

}

function SearchField() {
    return (
        <form className="d-flex" onSubmit={sendSearchData}>
            <InputGroup>
                <Form.Control
                    className="btn-primary my-2 my-sm-0"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="Search"
                />
                <button 
                    className="btn btn-primary my-2 my-sm-0" 
                    type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </InputGroup>
        </form>
    );
}

export default SearchField;