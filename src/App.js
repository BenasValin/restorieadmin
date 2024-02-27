
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import DezesModal from './DezesModal/DezesModel.jsx';
import RamModal from './RamModal/RamModal.jsx';

import './App.css';
import React, {useState} from 'react';
function App() {

  const [returnedData, setReturnedData] = useState(['hiii theeere']);
  const [employee, setEmployee] = useState({id:0, ilgis:0, plotis:0, aukstis:0,ispejimas:0, kritis:0, kiekis:0})

  const [isBoxPageVisible, setIsBoxPageVisible] = useState(true);
  const [isRamPageVisible, setIsRamPageVisible] = useState(false)

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));

   }

  const getData = async () => {
    console.log(employee)
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: employee.ilgis
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  const createEmployee = async () => {
    console.log(employee)
    const newData = await fetch('/hello', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...employee
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }
// return(<>
//     <NavigationBar setIsBoxPageVisible={setIsBoxPageVisible} setIsRamPageVisible={setIsRamPageVisible} />
//       <DezesModal isBoxPageVisible={isBoxPageVisible} />
//       <RamModal isRamPageVisible={isRamPageVisible}/>
// </>)
 
  return (
    <div className="App">
      <input 
      type="number" 
      name="id" 
      placeholder='id' 
      onChange={setInput}>

      </input>
      <input 
      type="number" 
      name="ilgis" 
      placeholder='ilgis' 
      onChange={setInput}>

      </input>
      <input 
      type="number" 
      name="plotis" 
      placeholder='plotis' 
      onChange={setInput}>

      </input>
      <input 
      type="number" 
      name="aukstis" 
      placeholder='aukstis' 
      onChange={setInput}></input>
      <input 
      type="number" 
      name="ispejimas" 
      placeholder='ispejimas' 
      onChange={setInput}>

      </input>
      <input 
      type="number" 
      name="kritis" 
      placeholder='kritis' 
      onChange={setInput}>

      </input>
      <input 
      type="number" 
      name="kiekis" 
      placeholder='kiekis' 
      onChange={setInput}>

      </input>
      <button onClick={() => getData()}>click</button>
      <button onClick={() => createEmployee()}>Create</button>
      <p>id: {returnedData.id}</p>
      <p>ilgis: {returnedData.ilgis}</p>
      <p>plotis: {returnedData.plotis}</p>
      <p>aukstis: {returnedData.aukstis}</p>
      <p>ispejimas: {returnedData.ispejimas}</p>
      <p>kritis: {returnedData.kritis}</p>
      <p>kiekis: {returnedData.kiekis}</p>
    </div>
  );
}

export default App;
