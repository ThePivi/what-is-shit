import Rating from "./Rating";

import "./Card.css"

function Card (props) {
    return (
        <div className="smallSize" >
            {props.cardContent.title} {/* TODO ez a sor fromázandó, akár paraméterezve (a kinézetre vonatkozóan) kiemelhető külön komponensbe */}
            <div>
                <img className="tumbnail" src={props.cardContent.links.tumbnail} />
                <Rating shitNumber={props.cardContent.shits}/>
            </div>
        </div>
    )
}

export default Card;