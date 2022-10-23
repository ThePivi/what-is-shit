import Rating from "./Rating";

import "./Card.css"

let shitId = 0;
function shitIdGenerator () {
    shitId += 100;
    return shitId;
}

function Card (props) {
    return (
        <div className="smallSize" >
            {props.cardContent.title} {/* TODO ez a sor fromázandó, akár paraméterezve (a kinézetre vonatkozóan) kiemelhető külön komponensbe */}
            <div>
                <img id={shitIdGenerator()} className="tumbnail" src={props.cardContent.links.tumbnail} />
                <Rating shitId={shitId} shitNumber={props.cardContent.shits}/>
            </div>
        </div>
    )
}

export default Card;