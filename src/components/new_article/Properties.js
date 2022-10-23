function Properties () {
    return (
        <div className="col-lg-4 offset-lg-0">
            <div>
                <label>Cím:</label>
                <input className="form-control" type="text" />
            </div>
            <div>
                <label>Kis kép:</label>
                <input className="form-control" type="file" />
            </div>
            <div>
                <label>Nagy kép/video:</label>
                <input className="form-control" type="file" />
            </div>
            <div>
                <label className="form-label">Értékelések:</label> <br />
                <label htmlFor="Grafika" className="form-label">Grafika</label>
                <input type="range" className="form-range" id="Grafika"></input>
            </div>
            <div>
                <label>ClickBait:</label>
                <input className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Zsanra lista:</label>
                <select multiple="true" className="form-select" id="exampleSelect2">
                    <option>beégetett1</option>
                    <option>beégetett2</option>
                    <option>beégetett3</option>
                    <option>beégetett4</option>
                    <option>beégetett5</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary">Save Button</button>
                <button type="submit" className="btn btn-outline-warning">Publish Button</button>
            </div>
        </div>
    );
}

export default Properties;