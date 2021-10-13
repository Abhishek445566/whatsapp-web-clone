import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Chat from './Chat.js';

function App() {
  return (
    <div className="app">
 
    <div className="app_body">
    
      <SideBar />
      <Chat />
    </div>
    </div>
  );
}

export default App;
