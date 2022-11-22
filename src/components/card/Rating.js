import SmallShit from "./SmallShit";

function shitGenerator(shitNumber) {
    const ratingShit = 10;
    const fillShit = Math.round((ratingShit / 100) * shitNumber);
    let result = [];

    for (let i = 1; i <= ratingShit; i++) {
        if (i <= fillShit) {
            result.push(<SmallShit key={"shit" + i} mode="filled" />);
        } else {
            result.push(<SmallShit key={"shit" + i} mode="empty" />);
        }
    }

    return result;
}

function Rating(props) {
    return <div>
        {shitGenerator(props.shitNumber)}
    </div>
}

export default Rating;