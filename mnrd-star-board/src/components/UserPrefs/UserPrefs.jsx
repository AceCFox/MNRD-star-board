//imports
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';

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
    const teams = useSelector(state => state.teams);
    let teamName = 'Other';

    //find team name associated with user
    for (let team of teams){
        if (user.team_id===team.id){
            teamName = team.name
        }

    }
  
    return (
      <div>
        <Typography variant = "h1">{user.name}'s Preferences</Typography>
        <Typography variant = "h5">Pronouns: {user.pronouns}</Typography>
        <br/>
       <Grid container direction = "row" alignContent = "center" justify = "center" >
           <Typography variant="h3"> Team:  {teamName}  </Typography> 
           <Tooltip title="Edit Team" placement="right-start"> 
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
            </Tooltip>
       </Grid> 
      { <Typography variant = "h2">Bio</Typography> && user.bio}

      </div>
    );
  }
  
  export default UserPrefs;