import React from "react";
import Smurf from './Smurf';

const SmurfList = ({ smurfs }) => {
  return (
    <div className="cards">
      {smurfs.map(smurf => 
        <Smurf key={smurf.id} smurf={smurf} />
      )}
    </div>
  );
};

export default SmurfList;