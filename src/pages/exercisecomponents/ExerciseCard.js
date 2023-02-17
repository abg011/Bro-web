import { Link } from 'react-router-dom';
import '../../css/ExerciseCard.css'

export default function ExerciseCard ({val}) {   

    const exerciseCardOnClickHandler = function () {
        return (
            <Link to={`/dta/${val._id}`}></Link>
        );
    }

    // console.log(JSON.stringify(val));
    return (
        <div className="exerciseCard" onClick={exerciseCardOnClickHandler}>
            <h3 className='exName'>
                {val.name}
            </h3>
            <h6 className='exId'>
                Id: {val._id}
            </h6>
        </div>
    );
}