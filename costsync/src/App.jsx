import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    (async () => {
      const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
      const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
      // do something with response here, not outside the function
      console.log(response);
    })();
  
  },[])
  
  return (
    <div className='text-gray-200'>
      constSync
    </div>
  )
}

export default App
