import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select"
import "./../css/AddExercise.css"

export default function AddExercise() {
    let [input, setInput] = useState({});
    let [categoriesList, setCategoriesList] = useState([]);
    let [musclesList, setMusclesList] = useState([]);


    useEffect(() => {
        const fetchCategories = async () => {
            // console.log("Called this")
            fetch('http://localhost:3002/musclegroups')
                .then(res => res.json())
                .then(mgs => {
                    let options =  mgs.map( mg => {
                        return {value: mg.name, label: mg.name, id: mg._id}
                    });
                    // console.log("List: ", ex);
                    setCategoriesList(options);
                })
        }

        fetchCategories();
    }, [])

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
        console.log(val);
        setInput({...input, muscleGroups: val});
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
    // const getCategory = () => {return (input.muscleGroups) ? input.muscleGroups: ""};
    const getMuscles = () => {return (input.muscles) ? input.muscles: ""};
    const getDescription = () => {return (input.description) ? input.description: ""};
    const getReference = () => {return (input.reference) ? input.reference: ""};
    
    return (
        <div className="exercise">
            <h1 className="header">Add new exercise</h1>
            <form onSubmit={addExercise}>
                <label>
                    <h3>Name of exercise:* <input className="nameInput" placeholder="Name of the Exercise" onChange={setName} value={getName()}></input></h3>
                </label>
                <label className="categoryLabel">
                    <h3>
                        Category:* 
                    </h3>
                    <Select
                        isMulti
                        name="categoryInput"
                        options={categoriesList}
                        onChange={setExerciseCategory}
                        className="categoryInput"
                    />
                </label>
                <label>
                    <h3>Muscles hit: <input className="name" placeholder="Select Muscles" onChange={setMuscles} value={getMuscles()}></input></h3>
                </label>
                <label>
                    <h3>Description: <input className="name" placeholder="Add Short Description" onChange={setDescription} value={getDescription()}></input></h3>
                </label>
                <label>
                    <h3>Reference: <input className="name" placeholder="Video/Image Reference" onChange={setReference} value={getReference()}></input></h3>
                </label>
                <div className="buttons">
                    <input type="submit" value="Add"></input>
                    <Link to="/exercises"><button>Go Back</button></Link>
                </div>
            </form>
            
        </div>
    );
}