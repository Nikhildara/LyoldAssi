import React from 'react'
import {BsBatteryFull, BsWifi} from 'react-icons/bs'
import {AiFillSignal} from 'react-icons/ai'
import './index.css'

const Iphone8Head = () => {
  const Heloo = 'Hello'
  return (
    <div className="head">
      <div className="time">
        <p> 9:41</p>
      </div>
      <div className="batt-wifi">
        <AiFillSignal />

        <BsWifi />
        <BsBatteryFull />
      </div>
    </div>
  )
}

export default Iphone8Head
