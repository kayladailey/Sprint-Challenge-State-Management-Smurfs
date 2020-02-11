import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Smurf from '../components/Smurf';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfForm from './SmurfForm';

function App() {
	const [ smurf, setSmurf ] = useState([{}]);

	useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
   // .then(res => console.log(res.data))
   .then(res => { 
     setSmurf({smurf: res.data})
     .catch(err => console.log('Error', err))
   })
  }, []);


  
	return (
		<SmurfContext.Provider value={smurf}>
			<div className="container">
			{setSmurf.smurfs.map(smurf=> (
		<h2>{smurf.name}</h2>
			))}
        <SmurfForm/>
			</div>
		</SmurfContext.Provider>
	);
}

export default App;
