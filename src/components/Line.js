// Line.js
import React, { useEffect, useRef } from 'react';
import Konva from 'konva';
import { Line as KonvaLine, Stage, Layer } from 'react-konva';
import './Line.css'; // Create this file for styling

const Line = ({ from, to }) => {
  const lineRef = useRef();

  useEffect(() => {
    const points = [
      { x: 0, y: 0 }, // start point (dummy value)
      { x: 100, y: 100 }, // end point (dummy value)
    ];

    lineRef.current.points(points);
    lineRef.current.to({ x: 0, y: 0 }); // reset the end point to (0, 0)
    lineRef.current.to({
      x: lineRef.current.to().x + 1, // increment the x value to trigger update
      y: lineRef.current.to().y + 1, // increment the y value to trigger update
    });

    // Use Konva to draw a line
    const layer = lineRef.current.getLayer();
    const line = new Konva.Line({
      points: points.flatMap(point => [point.x, point.y]),
      stroke: 'black',
      strokeWidth: 2,
      lineCap: 'round',
      tension: 0.5,
      draggable: true,
    });

    layer.add(line);
    layer.batchDraw();
  }, [from, to]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute' }}>
      <Layer>
        <KonvaLine
          ref={lineRef}
          stroke="black"
          strokeWidth={2}
          lineCap="round"
          tension={0.5}
          draggable
          className="connecting-line"
        />
      </Layer>
    </Stage>
  );
};

export default Line;
