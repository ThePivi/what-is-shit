import "./CardController.css"

function CardController (props) {
    return <div className="row-grid">
        {props.children}
    </div>
}

export default CardController;