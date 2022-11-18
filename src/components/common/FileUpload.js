function FileUpload(props) {
    return (
        <div>
            <label>{props.name}:</label>
            <input className="form-control" type="file" ref={props.setFile} />
        </div>
    );
}

export default FileUpload;