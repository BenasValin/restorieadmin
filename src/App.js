
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import DezesModal from './DezesModal/DezesModel.jsx';
import RamModal from './RamModal/RamModal.jsx';
import Warning from './Warning/Warning.jsx';
import Searchpage from './SeachPage/SearchPage.jsx';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [isBoxPageVisible, setIsBoxPageVisible] = useState(true);
  const [isRamPageVisible, setIsRamPageVisible] = useState(false);
  const [isWarningPageVisible, setIsWarningPageVisible] = useState(false);
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false);

return(<div className="bodyContainer"> 
    <NavigationBar setIsBoxPageVisible={setIsBoxPageVisible} setIsRamPageVisible={setIsRamPageVisible} setIsWarningPageVisible={setIsWarningPageVisible} setIsSearchPageVisible={setIsSearchPageVisible}/>
      <DezesModal isBoxPageVisible={isBoxPageVisible} />
      <RamModal isRamPageVisible={isRamPageVisible}/>
      <Warning isWarningPageVisible={isWarningPageVisible}/>
      <Searchpage isSearchPageVisible={isSearchPageVisible}/>
</div>)
};

export default App;
