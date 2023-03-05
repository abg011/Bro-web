import { useNavigate } from 'react-router-dom';
import '../../css/ExerciseCard.css'

export default function ExerciseCard ({val}) {   
    const navigate = useNavigate();

    return (
        <div className="exerciseCard" onClick={() => {navigate(`/exercises/${val._id}`, {state: {val}})}}>
            <h3 className='exName'>
                {val.name}
            </h3>
            <h6 className='exId'>
                Id: {val._id}
            </h6>
        </div>
    );
}