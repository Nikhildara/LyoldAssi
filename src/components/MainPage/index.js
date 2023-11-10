import React, {useState, useEffect} from 'react'
import Iphone8Head from '../Iphone8Head'
import NavBar from '../Navbar'
import ScrollBar from '../ScrollBar'
import ProductsSection from '../ProductsSection'

import './index.css'

const MainPage = () => {
  const [hello, setHello] = useState('')

  // const getData = async () => {
  //   const response = await fetch(
  //     'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
  //   )
  //   const data = await response.json()
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className="mainPage">
      <Iphone8Head />
      <NavBar />
      <div className="bottom-page">
        <ScrollBar />
        <ProductsSection />
      </div>
    </div>
  )
}

export default MainPage
