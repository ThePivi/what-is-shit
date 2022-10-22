import "./SmallShit.css"

const smallShit = [
    "https://cdn-icons-png.flaticon.com/128/1642/1642952.png",
    "https://cdn-icons-png.flaticon.com/128/1014/1014733.png",
    "https://cdn-icons-png.flaticon.com/128/7113/7113075.png",
    "https://cdn-icons-png.flaticon.com/128/1468/1468077.png",
    "https://cdn-icons-png.flaticon.com/128/720/720965.png",
    "https://cdn-icons-png.flaticon.com/128/2339/2339871.png",
    "https://cdn-icons-png.flaticon.com/128/1933/1933530.png",
    "https://cdn-icons-png.flaticon.com/128/3852/3852409.png",
    "https://cdn-icons-png.flaticon.com/128/3799/3799389.png",
    "https://cdn-icons-png.flaticon.com/128/7690/7690817.png",
    "https://cdn-icons-png.flaticon.com/128/2295/2295195.png",
    "https://cdn-icons-png.flaticon.com/128/2283/2283096.png"
];
function randomShitPicker () {
    return Math.floor(Math.random() * smallShit.length-1) + 1;
}

function SmallShit (props) {
    let shitUrl = smallShit[0];
    if (props.mode === "filled") {
        shitUrl = smallShit[randomShitPicker()];
    }
    return <span>
        <img className="smallShitWidth" src={shitUrl} />
    </span>;
}

export default SmallShit;