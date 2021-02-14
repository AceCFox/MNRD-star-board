import React from 'react';
import { Stage, Layer, Star, Text, Group} from 'react-konva';
import './StarField.css';
import {useSelector, useDispatch} from 'react-redux'

export default function StarField (){
  const events = useSelector(state => state.events);
  const dispatch = useDispatch()

  const handleDragStart = (e) => {
    const id = e.target.id();
    dispatch({type: 'DRAG_STAR', payload: id})
  };

  const handleDragEnd = (e) => {
    dispatch({type: 'DRAG_END'})
  };

  return (
    <div className = "starField">
    <Stage width={window.innerWidth - 15} height={window.innerHeight-5}>
      <Layer> 
        {events.map((star, index) => (
          <Group key = {index}  
            x={star.x}
            y={star.y}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <Star
              key={star.id}
              id={star.id}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
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
              text = {star.name}
            >
            </Star>
            <Text text={star.date.slice(0,10)}
              fill = "white"
              align="left"
              fontSize={10}
              padding={0}
            />
          </Group>
        ))}
      </Layer>
    </Stage>
    </div>
  );
};
