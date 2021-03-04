//imports
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'

//constants
//styling for the MNRD colored button
const useStyles = makeStyles({
    root: {
      background: '#00B6F1',
    },
    formWidth: {
        minWidth: 150
    }
  });


function Register() {
    let history = useHistory();
    const classes = useStyles();
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState ('');
    const [PasswordConfirm, setPasswordConfirm] = useState ('');
    const [Pronouns, setPronouns] = useState ('');
    const [Team, setTeam] = useState({id:''});
    const teams = useSelector(state => state.teams);
    const [passwordError, setPasswordError] = useState(false)

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangePasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value)
    }

    const handleChangePronouns = (event) => {
        setPronouns(event.target.value);
    };

    const handleChangeTeam = ( event ) => {
        let id = event.target.value
        for ( let team of teams ){
            if ( team.id === id ){
                setTeam( team );
            }
        } 
    }

    const handleRegister = () => {
        if (Password !== PasswordConfirm){
            setPasswordError(true)
            alert(`oops! Passwords don't match`)
            return
        } 
        const loginObject = {
            name: Name,
            password: Password
        }

        console.log(loginObject);
         //dispatch login saga HERE
        //nest this after returned promise, tho
        history.push("/login");
    }

    const handleReturningUser = () => {
        // go to register page here!
        history.push("/login");
    }

    return (
      <div>
          <div className = "spacer"> </div>
            <h3><em>New StarBoard User?</em></h3>
            <h1>Register Here!</h1>
            <Grid container justify="space-around" direction = "column" spacing = {2}>
            <Grid item>
                <TextField required label = "Name" value = {Name} onChange = {handleChangeName}/>
                {"\u00a0"}{"\u00a0"}
                <TextField id="pronouns" label="Pronouns" value={Pronouns} onChange = {handleChangePronouns} />
            </Grid>
            <Grid item>
                <TextField required type = "password" label = "Password" value = {Password} onChange = {handleChangePassword}/> 
                {"\u00a0"}{"\u00a0"}
                <TextField required 
                    type = "password" 
                    label = "Confirm Password" 
                    value = {PasswordConfirm} 
                    error ={passwordError} 
                    onChange = {handleChangePasswordConfirm}/> 
            </Grid>
            <Grid item>
            <FormControl  className = {classes.formWidth} required>
                    <InputLabel id="team-picker-label">Team</InputLabel>
                        <Select
                        labelId="team-picker-label"
                        id="team-picker"
                        value={Team.id}
                        onChange={handleChangeTeam}
                        >
                        {teams.map((team, index)=>( 
                            <MenuItem value={team.id} key = {index}>{team.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <br/>
            <Grid container item direction = "row" justify = "center" alignItems = "center" spacing = {4}>
                <Grid item>
                    <Button variant = 'contained' className={classes.root} onClick={handleRegister}> 
                        Register Account
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant = 'contained' className={classes.root} onClick = {handleReturningUser}> 
                        Returning User?
                    </Button>
                </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Register;