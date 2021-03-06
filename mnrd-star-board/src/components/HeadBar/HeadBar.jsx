//imports
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

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

function HeadBar() {
  let history = useHistory();
  const classes = useStyles();
  const user = useSelector(state => state.user);

  function goForm() {
    history.push("/form")
  }

  function goStar() {
    history.push("/starField")
  }
  
  function goPrefs() {
    history.push("/userPrefs")
  }
    return (
      <div>
        {/* HeadBar only visible if user is logged in */}
        {user.id &&
        <AppBar className = {classes.root} >
          <Toolbar>
            <Grid container justify="space-around">
            <Button color="inherit"  onClick = {goForm}>Log Activity</Button>
            <Button color="inherit" onClick = {goStar}>Progress</Button>
            <Button color="inherit" onClick = {goPrefs}>Preferences</Button>
            </Grid>
          </Toolbar>
        </AppBar>
        }
      </div>
    );
  }
  
  export default HeadBar;