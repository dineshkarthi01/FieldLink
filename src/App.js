// App.js

import React from 'react';
import FieldLinker from './FieldLinkers';

const App = () => {
  const dataA = ['name', 'email', 'Mobile'];
  const dataB = ['XXX', 'abc@gmail.com', '4534265'];
  const linkColor = 'blue'; // Customize the link color

  return (
    <div>
      <h1>Field Linker Example</h1>
      <FieldLinker dataA={dataA} dataB={dataB} linkColor={linkColor} />
    </div>
  );
};

export default App;
