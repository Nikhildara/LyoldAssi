import React, {useState} from 'react'

import './App.css'
import MainPage from './components/MainPage'
import Context from './components/Context'

const App = () => {
  const [cart, setCart] = useState([])

  const addCart = id => {}

  const removeCart = id => {}

  return (
    <Context.Provider>
      <MainPage />
    </Context.Provider>
  )
}

export default App
