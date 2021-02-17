import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//will fire on FETCH_TEAM
function* getTeams(){
    try{
        const result = yield axios.get('/api/team/');
        console.log('back from server with: ', result.data);
        //store results in a reducer
        yield put ({ type: 'SET_TEAMS', payload: result.data});
    }catch (error) {
        console.log('Error with event GET:', error);
    }
}



function* activitySaga() {
    yield takeLatest('FETCH_TEAM', getTeams);
  }

export default activitySaga;