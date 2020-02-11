import React, { useEffect } from "react";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import { getSmurfs, postSmurf } from '../actions';
import { connect } from "react-redux";


const App = ({smurfs, getSmurfs, postSmurf }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs])

  return (
    <div className="App">
        <h1>Smurfs</h1>
        <SmurfForm postSmurf={postSmurf} />
        <SmurfList smurfs={smurfs} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.gettingSmurfs,
    postingSmurf: state.postingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurf })(App);