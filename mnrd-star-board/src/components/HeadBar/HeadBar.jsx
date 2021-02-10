//imports
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function HeadBar() {
  let history = useHistory();

  function goForm() {
    history.push("/form")
  }
  
    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-around">
          <Button color="inherit"  onClick = {goForm}>Log Activity</Button>
          <Button color="inherit">Progress</Button>
          <Button color="inherit">Preferences</Button>
          </Grid>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
  
  export default HeadBar;