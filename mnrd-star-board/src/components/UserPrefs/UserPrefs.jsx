//imports
import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [EditTeam, setEditTeam] = useState(false);
    const [Team, setTeam] = useState({});
    const dispatch = useDispatch();

     // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    //find team name associated with user
        for (let team of teams){
            if (user.team_id===team.id){
                setTeam(team);
            }
        }
    });
    
    const handleChangeTeam = (event) => {
        let id = event.target.value
        for (let team of teams){
            if (team.id===id){
                setTeam(team);
            }
        }
        dispatch({type: "UPDATE_TEAM", payload: id})
        handleToggleEdit();
    } 
   
    const handleToggleEdit = () =>{
        setEditTeam(!EditTeam)
    }
  
    return (
      <div>
        <h1>{user.name}'s Preferences</h1>
        <h5>Pronouns: {user.pronouns}</h5>
        {/* <br/> */}
       <Grid container direction = "row" alignContent = "center" justify = "center" >
           {EditTeam ?
           <FormControl size="medium" >
                <InputLabel id="team-picker-label">Team</InputLabel>
                    <Select
                    labelId="team-picker-label"
                    id="team-picker"
                    value={Team.id}
                    onChange={handleChangeTeam}
                    >
                    {teams.map((team)=>( 
                        <MenuItem value={team.id} key = {team.id}>{team.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
           :
            <>
            <h3> Team:  {Team.name}  </h3> 
           <Tooltip title="Edit Team" placement="right-start"> 
                <IconButton aria-label="edit" onClick = {handleToggleEdit}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
            </>
            }
       </Grid> 
      { <h3>Bio</h3> && user.bio}

      </div>
    );
  }
  
  export default UserPrefs;