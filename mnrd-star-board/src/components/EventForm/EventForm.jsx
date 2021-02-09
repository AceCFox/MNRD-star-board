//imports
import 'date-fns';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

function EventForm() {
    const [description, setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [photoURL, setPhotoURL] = useState('');

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleChange = (event) => {
        setDescription(event.target.value);
      };
    
    const handleURL = (event) => {
        setPhotoURL(event.target.value);
    };

    return (
      <div>
        <h1>Log your Practice or Activity!</h1>
        <Grid container justify="space-around">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* Date Picker */}
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Practice Date"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            {/* Description */}
            <TextField
                id="description"
                label="What did you do?"
                placeholder="I did a virtual Solcana Workout for 45 minutes with a 30 lb kettlebell!"
                multiline
                value = {description}
                onChange = {handleChange}
            />
            {/* Photo URL  - TODO - replace with Uppy */}
            <TextField
                id="photoURL"
                label="Add a photo URL:"
                multiline
                value = {photoURL}
                onChange = {handleURL}
            />
        </Grid>
      </div>
    );
  }
  
  export default EventForm;