import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form';
import Card from './components/Card';


function App() {
  const [praktikan, setPraktikan] = React.useState(null);
  const addPraktikanHandler = (data) => {
    console.log(data);
    setPraktikan(data);
  };
  const removePraktikanHandler = () => {
    setPraktikan(null);
  };
  return (
    <div className="App">
      <h1>Kartu Praktikan</h1>
      <Form onAddPraktikan={addPraktikanHandler} />

      {praktikan && <>
        <button className="delete"
          onClick={removePraktikanHandler}> Hapus </button>

        <Card nama={praktikan.nama}

          kelompok={praktikan.kelompok} />
      </>}
    </div>
  );




}

export default App
