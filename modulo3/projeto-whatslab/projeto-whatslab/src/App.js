import React from 'react';
import './style';
import Sender from './components/Sender';
import SendMessage from './components/SendMessage';
import HistoryMessage from './components/HistoryMessage'

function App() {
  return (
    <div>
      <HistoryMessage/>
      <Sender/>
     <SendMessage/>
    </div>
   
  )
}
export default App;