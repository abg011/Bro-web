import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/AddExercise.css"

export default function AddExercise() {
    let [input, setInput] = useState({});

    const addExercise = async () => {
        // console.log(JSON.stringify(input));

        if(input == null || Object.keys(input).length === 0) {
            alert("Mandatory fields are empty.");
            return;
        }

        const result = await fetch('http://localhost:3002/exercises/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })

        // const resultObj = (result == null) ? null: JSON.parse(result);
        console.log("Post result: ", result);

        if(result.status === 200) {
            setInput({});
        }
        else alert(`Error while adding exercise: ${JSON.stringify(result.json())}`);
    }

    const setName = async (val) => {
        // console.log(val.target.value);
        setInput({...input, name: val.target.value});
    }

    const setExerciseCategory = async (val) => {
        // console.log(val.target.value);
        setInput({...input, muscleGroups: val.target.value});
    }

    const setMuscles = async (val) => {
        // console.log(val.target.value);
        setInput({...input, muscles: val.target.value});
    }

    const setDescription = async (val) => {
        // console.log(val.target.value);
        setInput({...input, description: val.target.value});
    }

    const setReference = async (val) => {
        // console.log(val.target.value);
        setInput({...input, reference: val.target.value});
    }

    const getName = () => {return (input.name) ? input.name: ""};
    const getCategory = () => {return (input.muscleGroups) ? input.muscleGroups: ""};
    const getMuscles = () => {return (input.muscles) ? input.muscles: ""};
    const getDescription = () => {return (input.description) ? input.description: ""};
    const getReference = () => {return (input.reference) ? input.reference: ""};

    return (
        <div className="exercise">
            <h1 className="header">Add new exercise</h1>
            <h3>Name of exercise *:  <input className="name" placeholder="name of the exercise" onChange={setName} value={getName()}></input></h3>
            <h3>Category: <input className="name" placeholder="select category" onChange={setExerciseCategory} value={getCategory()}></input></h3>
            <h3>Muscles hit: <input className="name" placeholder="select muscles" onChange={setMuscles} value={getMuscles()}></input></h3>
            <h3>Description: <input className="name" placeholder="add short description" onChange={setDescription} value={getDescription()}></input></h3>
            <h3>Reference: <input className="name" placeholder="video/image reference" onChange={setReference} value={getReference()}></input></h3>
            <div className="buttons">
                <button onClick={addExercise}>Add</button>
                <Link to="/exercises"><button>Go Back</button></Link>
            </div>
        </div>
    );
}