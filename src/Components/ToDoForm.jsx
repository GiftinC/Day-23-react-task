import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
    name: "",
    description: ""
}

const ToDoForm = ({ addDetail, editDetail, editData }) => {

    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*  console.log(formState); */
        if (editData) {
            editDetail(formState, editData.id)
        }
        else {
            addDetail(formState);
        }
        setFormState(initialState);
    };

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        if (editData) {
            setFormState(editData);
        }
    }, [editData])

    return (
        <div>
            {console.log(editData)}
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Todo Name</label>
                <input name="name" id="name" value={formState.name} onChange={handleChange} required style={{ border: "2px solid green", margin: 20 }} />

                <label htmlFor="description">Todo description </label>
                <input name="description" id="description" value={formState.description} onChange={handleChange} required style={{ border: "2px solid green", margin: 20 }} />

                <button style={{ backgroundColor: "green", color: "white" }} type="submit">{editData ? "Edit" : "Add Todo"}</button>
            </form>
        </div>
    )
}

ToDoForm.propTypes = {
    addDetail: PropTypes.func.isRequired,
    editData: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string
    }),
    editDetail: PropTypes.func
}

export default ToDoForm