import React, { useState } from 'react';
import './App.css';

const Box = ({ size }) => {
  const [isSplit, setIsSplit] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    setIsSplit(true);
  };

  if (!isSplit) {
    return (
      <div
        className="box"
        style={{ width: size, height: size }}
        onClick={handleClick}
      ></div>
    );
  }

  return (
    <div className="box-container" style={{ width: size, height: size }}>
      <Box size={size / 2} />
      <Box size={size / 2} />
      <Box size={size / 2} />
      <Box size={size / 2} />
    </div>
  );
};

const App = () => {
  const initialSize = 400;
  return (
    <div className="container-fluid">
      <h1 className="header">SPLIT THE BOX</h1>
      <Box size={initialSize} />
    </div>
  );
};

export default App;
