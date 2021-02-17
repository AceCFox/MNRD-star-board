//imports
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'

//style
const useStyles = makeStyles({
  root: {
    background: '#00B6F1',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px "grey")',
    color: 'black'
  },
});

function UserPrefs() {
    const user = useSelector(state => state.user);
  
    return (
      <div>
        <h1>{user.name}'s Preferences</h1>
      </div>
    );
  }
  
  export default UserPrefs;