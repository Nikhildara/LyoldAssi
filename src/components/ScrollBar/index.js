import React from 'react'
import {FaCarrot} from 'react-icons/fa'
import {ImWoman, ImMan} from 'react-icons/im'
import {GiLoincloth, GiSlicedBread, GiNestEggs} from 'react-icons/gi'
import {BsSmartwatch} from 'react-icons/bs'
import {FcElectronics} from 'react-icons/fc'
import './index.css'

const scrollItem = [
  {id: 1, displayName: "Women's clothing", icon: <ImWoman />},
  {id: 2, displayName: " Men's Clothing", icon: <ImMan />},
  {id: 3, displayName: 'Fashion Clothing', icon: <GiLoincloth />},
  {id: 4, displayName: 'Groceries', icon: <GiSlicedBread />},
  {id: 5, displayName: 'Fresh', icon: <FaCarrot />},
  {id: 6, displayName: 'Electronics', icon: <FcElectronics />},
  {id: 7, displayName: 'Watches', icon: <BsSmartwatch />},
]

const ScrollBar = () => {
  const Scroll = 'Scroll'

  return (
    <div className="scroll-con">
      <ul className="scroll-list">
        {scrollItem.map(e => (
          <li key={e.id} className="scrollItem">
            <div className="scrollIcon">{e.icon}</div>
            <div className="scrollName">{e.displayName}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScrollBar
