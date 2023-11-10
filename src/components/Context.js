import React from 'react'

const Context = React.createContext({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
})

export default Context
