const eventReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EVENT':
        let events = action.payload;
        //add some properties for the pretty konva
        for (let i = 0 ; i< events.length; i++){
            events[i].x = Math.random() * window.innerWidth;
            events[i].y =  Math.random() * window.innerHeight;
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
