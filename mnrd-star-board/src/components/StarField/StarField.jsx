import React, {useEffect} from 'react';
import { Stage, Layer, Star, Text } from 'react-konva';
import './StarField.css';
import {useSelector, useDispatch} from 'react-redux'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function StarField (){
  const events = useSelector(state => state.events);
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState({attrs:{x:0, y:0}});
  const [activity, setActivity] = React.useState({date:''});
  const [stars, setStars] = React.useState(events);
  
  // star info and dragging stored in eventReducer
  useEffect(() => {
    setStars(events)

  }, [events]);

  const handleDragStart = (e) => {
    let starID = e.target.id();
    //map through array and apply isDragging to the relevant star
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === starID,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  // popover functionality:
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // set the activity related to the star clicked to local state
    for (let thing of events){
      if (thing.id === event.currentTarget.attrs.id){
        setActivity(thing)
      }
    }
  };

  const handleClose = () => {
    setAnchorEl( { attrs: {x:0, y:0} } );
  };

  const open = Boolean(anchorEl.attrs.x);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div className = "starField">
    {/* Draggable Stars: */}
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
          <Text 
                fill = "white" 
                fontSize = {30}
                fontStyle = "italic"
                text = {events.length + " Stars in the sky..."}
                y = {window.innerHeight *.93}
                x ={10}
                fontFamily = "roboto"
                />
        </Layer>
      <Layer> 
        {stars.map((star) => (
          <Star
            x={star.x}
            y={star.y}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            key={star.id}
            id={star.id}
            numPoints={5}
            innerRadius={star.innerRadius}
            outerRadius={star.outerRadius}
            fill={star.color}
            opacity={0.8}
            rotation={star.rotation}
            shadowColor="#828282"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.5 : 1}
            scaleY={star.isDragging ? 1.5 : 1}
            onClick = {handleClick}
            onTap = {handleClick}
            numPoints = {star.points}
            // turn the mouse into a pointer on mouseover
            onMouseEnter={e => {
              // style stage container:
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
              // handleClick(e)
            }}
            onMouseLeave={e => {
              const container = e.target.getStage().container();
              container.style.cursor = "default";
            }}
          />
        ))}
      </Layer>
    </Stage>
    {/* Popover that opens if star is clicked */}
    <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: anchorEl.attrs.y, left: anchorEl.attrs.x }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box p= {1} maxWidth = {200}>
          <Typography> {activity.description} ~ {activity.name} ~ {activity.date.slice(0,10)}
          </Typography>
        </Box>
      </Popover>
    </div>
  );
};
