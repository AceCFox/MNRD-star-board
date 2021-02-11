import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//this worker saga will be fired with every 'POST_ACTIVITY' action
function* postActivity(action){
    try{
        console.log ('in postActivity saga with ', action.payload);
        yield axios.post('/api/event/new', action.payload);
        //TO DO - call the saga with the GET call to update user with most recent data
    }catch (error) {
        console.log('Error with skill_category POST:', error);
    }
}


function* activitySaga() {
    yield takeLatest('POST_ACTIVITY', postActivity);
  }

export default activitySaga;