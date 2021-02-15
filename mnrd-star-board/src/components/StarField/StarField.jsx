import React from 'react';
import { Stage, Layer, Star, Text, Group} from 'react-konva';
import './StarField.css';
import {useSelector, useDispatch} from 'react-redux'
import Popover from '@material-ui/core/Popover';
import Modal from '@material-ui/core/Modal';
import { eventChannel } from 'redux-saga';

export default function StarField (){
  const events = useSelector(state => state.events);
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState({attrs:{}});
  const [activity, setActivity] = React.useState({date:''});

  const handleDragStart = (e) => {
    const id = e.target.id();
    dispatch({type: 'DRAG_STAR', payload: id})
  };

  const handleDragEnd = (e) => {
    dispatch({type: 'DRAG_END'})
  };

  // popover functionality:
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    for (let thing of events){
      if (thing.id === event.currentTarget.attrs.id){
        setActivity(thing)
      }
    }
  };

  const handleClose = () => {
    setAnchorEl({attrs:{}});
  };

  const open = Boolean(anchorEl.attrs.x);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className = "starField">
    <Stage width={window.innerWidth - 15} height={window.innerHeight-5}>
      <Layer> 
        {events.map((star) => (
          <Star
            x={star.x}
            y={star.y}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            key={star.id}
            id={star.id}
            numPoints={5}
            innerRadius={12}
            outerRadius={30}
            fill={star.color}
            opacity={0.8}
            rotation={star.rotation}
            shadowColor="grey"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onClick = {handleClick}
          />
        ))}
      </Layer>
    </Stage>
    <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: anchorEl.attrs.y, left: anchorEl.attrs.x }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        {activity.description} ~ {activity.name} 
        ~ {activity.date.slice(0,10)}
      </Popover>
    </div>
  );
};
