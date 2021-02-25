const eventReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EVENT':
        let events = action.payload;
        //add the initial star positions, and rotation
        for (let i = 0 ; i< events.length; i++){
            events[i].x = ( Math.random() * window.innerWidth * .95) +  (window.innerWidth * .025);
            events[i].y = ( Math.random() * window.innerHeight * .8) + (window.innerHeight * .1);
            events[i].rotation = Math.random() * 180;
            events[i].isDragging = false;
            events[i].points = Math.floor(Math.random() * Math.floor(4)+5);
            events[i].innerRadius = Math.floor(Math.random() * Math.floor(6)+6);
            events[i].outerRadius = events[i].innerRadius * 2 + 3;
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
