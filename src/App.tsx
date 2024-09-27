import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LikeButton />
    </div>
  );
}

function LikeButton() {
  const count = 999;
  return <span className='likeButton'>♥ {count}</span>;
}

export default App;
