// MatchListApp.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MatchList from './MatchList';

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

const MatchListApp = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="match-list-app">
        <MatchList items={items} />
      </div>
    </DndProvider>
  );
};

export default MatchListApp;
