// Box.js
import React, { useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Box = ({ id, title, connections }) => {
  const ref = useRef(null);

  const [, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id },
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transition = 'transform 0.3s';
      const isConnected = connections.includes(id);
      const translateX = isConnected ? '100px' : '0';
      ref.current.style.transform = `translateX(${translateX})`;
    }
  }, [connections, id]);

  return (
    <div ref={(node) => (ref.current = node)} className="box" {...drag}>
      {title}
    </div>
  );
};

export default Box;
