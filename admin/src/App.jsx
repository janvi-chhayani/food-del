import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
      </div>
      
    </div>
  )
}

export default App
