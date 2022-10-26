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
                <label htmlFor="Zene" className="form-label">Zene</label>
                <input type="range" className="form-range" id="Zene"></input>
                <label htmlFor="Hangok" className="form-label">Hangok</label>
                <input type="range" className="form-range" id="Hangok"></input>
                <label htmlFor="Szinkron" className="form-label">Szinkron</label>
                <input type="range" className="form-range" id="Szinkron"></input>
                <label htmlFor="Történet" className="form-label">Történet</label>
                <input type="range" className="form-range" id="Történet"></input>
                <label htmlFor="Irányítás" className="form-label">Irányítás</label>
                <input type="range" className="form-range" id="Irányítás"></input>
                <label htmlFor="Újrajátszhatóság" className="form-label">Újrajátszhatóság</label>
                <input type="range" className="form-range" id="Újrajátszhatóság"></input>
            </div>
            <div className="form-check form-switch">
                <label htmlFor="Online required" label class="form-check-label">Online required</label>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
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