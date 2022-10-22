import "./SmallShit.css"

const smallShit = [
    "https://png.pngtree.com/png-clipart/20220909/original/pngtree-cute-shit-clipart-with-sad-face-png-image_8507990.png",
    "https://i.dlpng.com/static/png/6965067_preview.png"
];

function SmallShit (props) {
    let shitUrl = smallShit[1];
    if (props.mode === "filled") {
        shitUrl = smallShit[0];
    }
    return <span>
        <img className="smallShitWidth" src={shitUrl} />
    </span>;
}

export default SmallShit;