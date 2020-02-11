import React, { useState } from 'react';


const SmurfForm = ({ postSmurf }) => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = event => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setSmurf({ name: "", age: "", height: "" });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newSmurf = {
      ...smurf,
      id: Date.now()
    };
    postSmurf(newSmurf);
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
    resetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a new Smurf!</h2>
        <input
          type="text"
          name="name"
          value={smurf.name}
          onChange={handleChanges}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={smurf.age}
          onChange={handleChanges}
          placeholder="Age"
        />
        <input
          type="text"
          name="height"
          value={smurf.height}
          onChange={handleChanges}
          placeholder="Height"
        />
        <button color="green">
          Add
        </button>
      </form>
    </>
  );
};

export default SmurfForm;