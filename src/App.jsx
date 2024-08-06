import { useState } from "react";
import ToDoForm from "./Components/ToDoForm";
import "./App.css";
import { v4 } from "uuid";
import Display from "./Components/Display";

const initialDetails = [
  {
    name: "Office Task-1",
    description: "This is the description for My First Task",
    id: "379b2914-6acf-40bf-a0c8-6eda97014358",
  },
  {
    name: "Office Task-2",
    description: "This is the description for My Second Task",
    id: "ac9bd046-fa6a-4832-b046-5da599206afd",
  },
  {
    name: "Office Task-3",
    description: "This is the description for My Third Task",
    id: "45238d8d-a99d-43a7-851a-fc095523ec43",
  },
];

function App() {
  const [Details, setDetails] = useState(initialDetails);
  const [editData, setEditData] = useState(null);

  const addDetail = (formDetails) => {
    const Detail = {
      ...formDetails,
      id: v4(),
    };
    console.log(Detail);

    const newDetails = [...Details, Detail];
    console.log(JSON.stringify(newDetails));
    setDetails(newDetails);
  };

  const deleteDisplay = (disId) => {
    const newDetails = Details.filter((Detail) => Detail.id !== disId);
    console.log(newDetails);
    setDetails(newDetails);
  };

  const loadEditData = (disData) => {
    setEditData(disData);
  };

  const editDetail = (formState, id) => {
    /*      console.log(formState,id) */
    const tempDetails = [...Details];
    const disIndex = tempDetails.findIndex((dis) => dis.id === id);

    tempDetails[disIndex] = {
      ...tempDetails[disIndex],
      ...formState,
    };

    setDetails(tempDetails);

    setEditData(null);
  };

  return (
    <>
      <h3 style={{ color: "green" }}>My todo</h3>
      <ToDoForm
        addDetail={addDetail}
        editDetail={editDetail}
        editData={editData}
      />
      <div
        style={{
          display: "flex",
          margin: 20,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <h3 style={{ display: "flex" }}>My Todos</h3>
        <label htmlFor="toDoFilter" style={{ marginLeft: 725 }}>
          <h3>Status Filter : </h3>{" "}
        </label>
        <select
          name="toDoFilter"
          id="toDoFilter"
          style={{
            backgroundColor: "grey",
            color: "white",
            margin: 5,
            marginBottom: 10,
            padding: 5,
          }}
        >
          <option value="ALL">ALL</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
        {console.log(Details)}
        {Details.map((dis) => (
          <Display
            /*   Without Spread Operator :
            key={dis.id} 
              name={dis.name}
              description={dis.description} */
            key={dis.id}
            {...dis}
            deleteDisplay={deleteDisplay}
            loadEditData={loadEditData}
            editDetail={editDetail}
          />
        ))}
      </div>
    </>
  );
}

export default App;
