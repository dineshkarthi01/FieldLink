// List.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Box from './Box';
import Line from './Line';
import { ItemTypes } from './ItemTypes';

const List = ({ title, items, listType }) => {
  const [lines, setLines] = useState([]);
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        setLines([...lines, { from: item.title, to: dropResult.title }]);
      }
    },
  });

  return (
    <div ref={drop} className="list-container">
      <h2>{title}</h2>
      <div className="boxes-container">
        {items.map((item, index) => (
          <Box key={index} title={item} listType={listType} />
        ))}
      </div>
      {lines.map((line, index) => (
        <Line key={index} from={line.from} to={line.to} />
      ))}
    </div>
  );
};

export default List;
