import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FindGift from './pages/FindGift'
import Home from './pages/Home'

function App() {
  const [giftInfo, setGiftInfo] = useState({
    name: '',
    age: '',
    gender: '',
    relation: ''
  })


  return (
    <>
    <Router>
      <Route path='/' exact>
        <Home giftInfo={giftInfo} setGiftInfo={setGiftInfo} />
      </Route>
      <Route path='/find-gift'>
        <FindGift giftInfo={giftInfo} setGiftInfo={setGiftInfo} />
      </Route>
    </Router>
    </>
  );
}

export default App;
