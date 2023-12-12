// Box.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Box = ({ title, listType }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`box ${isDragging ? 'dragging' : ''} ${listType}`}>
      {title}
    </div>
  );
};

export default Box;
