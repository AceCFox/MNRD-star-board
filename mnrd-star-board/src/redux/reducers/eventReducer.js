const eventReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EVENT':
        let events = action.payload;
        //add the initial star positions, and rotation
        for (let i = 0 ; i< events.length; i++){
            events[i].x = ( Math.random() * window.innerWidth * .95) +  (window.innerWidth * .025);
            events[i].y = ( Math.random() * window.innerHeight * .9) + (window.innerHeight * .08);
            events[i].rotation = Math.random() * 180;
            events[i].isDragging = false;
        }
        return events;
      case 'UNSET_EVENT':
        return [];
      case 'DRAG_STAR':
        for (let i = 0; i< state.length; i++){
          if (state[i].id === action.payload){
            state[i].isDragging = true;
          }
        }
        return state
      case 'DRAG_END':
        for (let i = 0; i< state.length; i++){
          state[i].isDragging = false;
        }
        return state
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default eventReducer;
