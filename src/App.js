import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';

function App() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/profile');
  };

  return (
    <div className="AppPage">
      <Routes>
        <Route path="/" element={
          <div class="container">
            <button className="RestartButton">&#8635;</button>
            <div class="typing"></div>
            <button className="Start" onClick={handleStartClick}>Start</button> 
          </div>
        }/>
      
        <Route path="/profile" element={<Profile />} />
        
        </Routes>
    </div>
  );
}

export default App;
