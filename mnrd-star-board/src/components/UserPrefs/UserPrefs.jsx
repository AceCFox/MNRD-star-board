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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

//style
const useStyles = makeStyles({
    switchBase: {
      color: '#00B6F1',
      "&$checked": {
        color: '#00B6F1'
      },
      "& + $track": {
        backgroundColor: '#00B6F1'
      }
    },
   checked: {},
    track: {}
  });
  
function UserPrefs() {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const teams = useSelector(state => state.teams);
    const [EditTeam, setEditTeam] = useState(false);
    const [EditPronouns, setEditPronouns] = useState(false);
    const [Team, setTeam] = useState({});
    const dispatch = useDispatch();
    const [Pronouns, setPronouns]= useState('');
    const [Visible, setVisible] = useState(user.visible)

     // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    //find team name associated with user
        for (let team of teams){
            if (user.team_id===team.id){
                setTeam(team);
            }
        }
    });
    useEffect(() => {
        setPronouns(user.pronouns);
    }, []);
    
    const handleChangeTeam = ( event ) => {
        let id = event.target.value
        for ( let team of teams ){
            if ( team.id === id ){
                setTeam( team );
            }
        }
        dispatch({ type: "UPDATE_TEAM", payload: id })
        handleToggleEdit();
    } 
   
    const handleToggleEdit = () => {
        setEditTeam( !EditTeam )
    }

    const handleToggleEditPronouns = () => {
        setEditPronouns( !EditPronouns )
    }

    const handleChangePronouns = (event) => {
        setPronouns(event.target.value);
    };

    const handleSavePronouns = () =>{
        const putObject = {pronouns: Pronouns};
        // dispatch saga to handle pronoun update
        dispatch({ type: "UPDATE_PRONOUNS", payload: putObject })
        handleToggleEditPronouns();
    }

    const handleToggleVisible = () =>{
        //TO DO: dispatch saga that updates visible status associated with user
        setVisible(!Visible)
    }
  
    return (
      <div>
        <h1>{user.name}'s Preferences</h1>
        <Grid container direction = "row" alignContent = "center" justify = "center" >
            { EditPronouns ?
            <> 
                <TextField required id="pronouns" label="Pronouns" value={Pronouns} onChange = {handleChangePronouns} />
                <Tooltip title="Save Pronouns" placement="right-start"> 
                    <IconButton aria-label="save" onClick = {handleSavePronouns}>
                        <SaveAltIcon />
                    </IconButton>
                </Tooltip>
            </>
            :
            <>
                <h5>Pronouns: {user.pronouns}</h5>
                <Tooltip title="Edit Pronouns" placement="right-start"> 
                    <IconButton aria-label="edit" onClick = { handleToggleEditPronouns }>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </>      
            }
        </Grid>
       {EditTeam && <br/>}
       <Grid container direction = "row" alignContent = "center" justify = "center" >
           {EditTeam ?
           <>
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
            </>
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
           <Grid item>
            <h4>Attendance Visibility:</h4>
            </Grid>
       <Grid container direction = "row" alignContent = "center" justify = "center" >
            <Grid item>
                < Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Hidden</Grid>
                    <Grid item>
                        <Switch checked={Visible} onChange={handleToggleVisible} name="visible?" classes={{switchBase:classes.switchBase }}/>
                    </Grid>
                    <Grid item>Visible</Grid>
                </Grid>
            </Grid>
        </Grid>
        {/* <FormControlLabel
            // className = {classes.checkBox}
            label="Visible Attendance Stars"
            control={<Switch checked={Visible} onChange={handleToggleVisible} name="visible?"
                classes={{switchBase:classes.switchBase }} color = "default"/>}
        /> */}
      { <h3>Bio</h3> && user.bio}
      </div>
    );
  }
  
  export default UserPrefs;