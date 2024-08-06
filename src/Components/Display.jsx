import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ name, description, id, deleteDisplay, loadEditData }) => {
    return (
        <div
            style={{
                backgroundColor: "lightgreen",
                height: 225,
                width: 375,
                padding: 15,
                margin: 10,
                textAlign: "left",
            }}
        >
            <p>Name:{name}</p>
            <p>Description:{description}</p>
            <label
                htmlFor="Status"
                style={{ backgroundColor: "lightgreen", fontSize: "small", margin: 5 }}
            >
                Status
            </label>
            <select
                name="Status"
                id="Status"
                style={{
                    display: "inline-flex",
                    backgroundColor: "green",
                    padding: 5,
                    color: "white",
                }}
            >
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>
            <div className="buttons">
                <button
                    style={{ backgroundColor: "green" }}
                    onClick={() =>
                        loadEditData({
                            name,
                            description,
                            id,
                        })
                    }
                >
                    Edit
                </button>
                <button
                    style={{ backgroundColor: "darkred" }}
                    onClick={() => deleteDisplay(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

Display.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    deleteDisplay: PropTypes.func,
    loadEditData: PropTypes.func,
};

export default Display;
