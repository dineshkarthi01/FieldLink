// FieldLinker.js

import React, { useState, useRef, useEffect } from 'react';
import DrawingBoard from 'react-drawing-board';
import './FieldLinker.css';

const FieldLinker = ({ dataA, dataB }) => {
  const [selectedPairs, setSelectedPairs] = useState([]);
  const drawingBoardRef = useRef();

  const handlePairClick = (index) => {
    if (selectedPairs.length === 1) {
      const newPairs = [...selectedPairs, index];
      setSelectedPairs(newPairs);
    } else {
      setSelectedPairs([index]);
    }
  };

  useEffect(() => {
    if (selectedPairs.length === 2) {
      const [indexA, indexB] = selectedPairs;
      const elementA = document.getElementById(`wordA-${indexA}`);
      const elementB = document.getElementById(`wordB-${indexB}`);
      if (elementA && elementB) {
        drawingBoardRef.current.drawLine(elementA, elementB, 'blue');
      }
    }
  }, [selectedPairs]);

  return (
    <div className="field-linker">
      {dataA.map((itemA, index) => (
        <div key={index} className="linker-row">
          <div
            id={`wordA-${index}`}
            className={`column-a ${selectedPairs.includes(index) ? 'selected' : ''}`}
            onClick={() => handlePairClick(index)}
          >
            {itemA}
          </div>
          <div className="column-b">{dataB[index]}</div>
        </div>
      ))}
      <DrawingBoard ref={drawingBoardRef} />
    </div>
  );
};

export default FieldLinker;
