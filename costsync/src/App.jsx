import { useEffect } from 'react';
import React from 'react';


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
    <div className='text-gray-900 text-3xl p-20 h-[100vh]'>
    ConstSync
    </div>
  )
}

export default App
