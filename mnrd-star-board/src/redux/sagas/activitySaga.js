import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//this worker saga will be fired with every 'POST_ACTIVITY' action
function* postActivity(action){
    try{
        console.log ('in postActivity saga with ', action.payload);
        yield axios.post('/api/event/new', action.payload);
        //call the saga with the GET call to update user with most recent data
        yield put ({ type: 'FETCH_ACTIVITY' });
    }catch (error) {
        console.log('Error with event POST:', error);
    }
}

//will fire on FETCH_ACTIVITY
function* getActivity(){
    try{
        console.log ('in getActivity saga' );
        const result = yield axios.get('/api/event/all');
        console.log('back from server with: ', result.data);
        //store results in a reducer
        yield put ({ type: 'SET_EVENT', payload: result.data});
    }catch (error) {
        console.log('Error with event GET:', error);
    }
}



function* activitySaga() {
    yield takeLatest('POST_ACTIVITY', postActivity);
    yield takeLatest('FETCH_ACTIVITY', getActivity);
  }

export default activitySaga;