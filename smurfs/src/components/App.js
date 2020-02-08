import React, { useState, useEffect } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';
import "./App.css";
import SmurfForm from "./SmurfForm";



const  App =  () =>{
  const [smurf, setSmurf] = useState({ });

    useEffect(() => {
      axios
        .get("http://localhost:3333/smurfs")
        .then(res => setSmurf(res.data))
        //.then(res => console.log(res))
        .catch(err => console.log(err));
    }, []);



  return (
      <SmurfContext.Provider value={smurf}>
      <div className="container">
        <h1>Smurf Village</h1>
        <SmurfForm />
  <h2>{}</h2>
      </div>
  </SmurfContext.Provider>
    );
  }

export default App;
