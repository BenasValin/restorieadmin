
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import DezesModal from './DezesModal/DezesModel.jsx';
import RamModal from './RamModal/RamModal.jsx';
import Warning from './Warning/Warning.jsx';
import Searchpage from './SeachPage/SearchPage.jsx';
import './App.css';
import React, {useState} from 'react';

function App() {

  const queryString = window.location.search;

  const searchParams = new URLSearchParams(queryString);
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  console.log(`page yra ${page}`)
  console.log(`page yra ${page}`)
  console.log(`page yra ${page}`)

  const [isBoxPageVisible, setIsBoxPageVisible] = useState(page == "dezes" || page == null ? true : false);
  const [isRamPageVisible, setIsRamPageVisible] = useState(page == "prekes" ? true : false);
  const [isWarningPageVisible, setIsWarningPageVisible] = useState(page == "ispejimai" ? true : false);
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(page == "paieska" ? true : false);
  

return(<div className="bodyContainer"> 
    <NavigationBar setIsBoxPageVisible={setIsBoxPageVisible} setIsRamPageVisible={setIsRamPageVisible} setIsWarningPageVisible={setIsWarningPageVisible} setIsSearchPageVisible={setIsSearchPageVisible}/>
      <DezesModal isBoxPageVisible={isBoxPageVisible} />
      <RamModal isRamPageVisible={isRamPageVisible}/>
      <Warning isWarningPageVisible={isWarningPageVisible}/>
      <Searchpage isSearchPageVisible={isSearchPageVisible}/>
</div>)
};

export default App;
