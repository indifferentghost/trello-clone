import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [val, setVal] = useState(2);
  return (
    <>
      <div>Hello {val}</div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setVal(val + 1)}>increment</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
