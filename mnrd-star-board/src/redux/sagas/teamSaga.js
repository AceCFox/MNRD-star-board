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

//will fire on UPDATE_TEAM actions
function* putUserTeam(action){
    try{
        const result = yield axios.put('/api/team/'+action.payload);
        //call the saga to get the updated star and user data
        yield put ({type: 'FETCH_USER'});
        yield put ({type:'FETCH_ACTIVITY'})
    }catch (error) {
        console.log('Error with event GET:', error);
    }
}



function* teamSaga() {
    yield takeLatest('FETCH_TEAM', getTeams);
    yield takeLatest('UPDATE_TEAM', putUserTeam);
  }

export default teamSaga;