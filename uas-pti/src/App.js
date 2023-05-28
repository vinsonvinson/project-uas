import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name.trim() !== '') {
      navigate('/story');
    }
  };

  const handleClick2 = () => {
    navigate('/aboutus');
  };

  return (
    <div className="containerwrap">
      <div className="header">
        <img
          className="logoIndo"
          src="https://api2.kemenparekraf.go.id/storage/app/uploads/public/621/437/638/621437638c977337188787.png"
          alt="WonderfulIndonesia"
        />
        <img
          className="logoUMN"
          src="https://seeklogo.com/images/U/universitas-multimedia-nusantara-umn-logo-48A807B801-seeklogo.com.png"
          alt="UMN"
        />
        <img
          className="logoF4"
          src="https://seeklogo.com/images/F/Fantastic_Four-logo-95A3DB03CB-seeklogo.com.png"
          alt="f4"
          onClick={handleClick2}
        />
        {/*Logo Kelompok jika diklik akan menuju ke About Us*/}
      </div>
      <br />
      <div className="inputName">
        <input
          type="text"
          placeholder="INPUT NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div className="start">
        <button className="startBtn" onClick={handleClick}>
          START
        </button>
      </div>
    </div>
  );
}

export default App;
