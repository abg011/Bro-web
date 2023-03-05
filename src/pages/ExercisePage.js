import { useLocation } from "react-router-dom";
import '../css/ExercisePage.css';
import ReactPlayer from "react-player/youtube"

export default function ExercisePage () {
    const location = useLocation();

    let {val} = location.state
    console.log(val.videoReference);

    return (
        <div className="exPage">
            <h1>{val.name}</h1>
            <ReactPlayer
                url={val.videoReference}
                width="60%"
                height="500px"
                controls
                className="player"
            />
        </div>
    );
}