import React from 'react';
import { Stage, Layer, Star, Text } from 'react-konva';
import './StarField.css';
import {useSelector} from 'react-redux'


export default function StarField (){
  const events = useSelector(state => state.events);
  const [stars, setStars] = React.useState(events);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
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

  return (
    <div className = "starField">
    <Stage width={window.innerWidth - 15} height={window.innerHeight-5}>
      <Layer>
    
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={13}
            outerRadius={30}
            fill={star.color}
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="grey"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
        <Text text={JSON.stringify(stars)} color = "white"/>
      </Layer>
    </Stage>
    </div>
  );
};
