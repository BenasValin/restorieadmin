
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import DezesModal from './DezesModal/Dezes.jsx';
import RamModal from './Prekes/Prekes.jsx';
import Warning from './Warning/Warning.jsx';
import Searchpage from './SeachPage/SearchPage.jsx';
import './App.css';
import React, {useState} from 'react';
import Inventorizacija from './Inventorizacija/Inventorizacija.jsx';
import Komponentai from './Komponentai/Komponentai.jsx';

function App() {

  const queryString = window.location.search;

  const searchParams = new URLSearchParams(queryString);
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const id = searchParams.get('id');

  console.log(`page yra ${page}`)
  console.log(`category yra ${category}`)
  console.log(`id yra ${id}`)

  const [isPageVisible, setIsPageVisible] = useState(page == null ? "dezes" : `${page}`);

return(<div className="bodyContainer"> 
    <NavigationBar setIsPageVisible={setIsPageVisible}/>
      <DezesModal isPageVisible={isPageVisible} searchId={id} />
      <Komponentai isPageVisible={isPageVisible}></Komponentai>
      <RamModal isPageVisible={isPageVisible}/>
      <Warning isPageVisible={isPageVisible}/>
      <Searchpage isPageVisible={isPageVisible}/>
      <Inventorizacija isPageVisible={isPageVisible}/>
</div>)
};

export default App;
