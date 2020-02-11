import React, {useContext} from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

function Smurf() {
	const smurf = useContext(SmurfContext);
console.log('hello', smurf.name);
	return (
		<div className="smurf">
				<h1>Smurf Village</h1>
				{smurf.name}, {smurf.age}
		</div>
	);
};

export default Smurf;
