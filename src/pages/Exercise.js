import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Exercise.css'
import ExerciseCard from "./exercisecomponents/ExerciseCard";

export default function Exercises() {
    let [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            // console.log("Called this")
            fetch('http://localhost:3002/exercises')
                .then(res => res.json())
                .then(ex => {
                    // console.log("List: ", ex);
                    setExercises(ex);
                })
        }

        fetchExercises();
    }, [])

    const displayExercises = () => {
        return exercises.map((exercise) => {
            return <ExerciseCard key={exercise._id} val={exercise}/>
        })
    }

    return (
        <div className="exercisePage">
            <h1 className="exHeading">Exercises</h1>
            <div className="displayExercises">{displayExercises()}</div>
            <Link className="addExercise" to="/exercises/add"><button className="buttonText">Add more exercises</button></Link>
        </div>
    )
}