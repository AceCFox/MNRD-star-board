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
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default eventReducer;
