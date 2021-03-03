//imports
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

//constants
//styling for the MNRD colored button
const useStyles = makeStyles({
    root: {
      background: '#00B6F1',
    },
  });


function Register() {
    return (
      <div>
          <div className = "spacer"> </div>
            <h3><em>New StarBoard User?</em></h3>
            <h1>Register Here!</h1>
      </div>
    );
  }
  
  export default Register;