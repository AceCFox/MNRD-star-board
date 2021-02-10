//imports
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


//style
const useStyles = makeStyles({
  root: {
    background: '#00ACEA',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
});

function HeadBar() {
  let history = useHistory();
  const classes = useStyles();

  function goForm() {
    history.push("/form")
  }

  function goStar() {
    history.push("/starField")
  }
  
    return (
      <div>
        <AppBar position="static" className = {classes.root} >
        <Toolbar>
          <Grid container justify="space-around">
          <Button color="inherit"  onClick = {goForm}>Log Activity</Button>
          <Button color="inherit" onClick = {goStar}>Progress</Button>
          <Button color="inherit">Preferences</Button>
          </Grid>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
  
  export default HeadBar;