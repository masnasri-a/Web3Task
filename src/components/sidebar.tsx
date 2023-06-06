"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Images from '@/assets/picture.jpg'
import { FiFolder, FiHome, FiCreditCard,FiSettings, FiInfo } from 'react-icons/fi'

const Sidebar = (props:any) => {
  const [active, setActive] = useState(0)
  const menu = [
    {
      title:"Home",
      icon:<FiHome />
    },{
      title:"Task",
      icon:<FiFolder />
    },{
      title:"Wallet",
      icon:<FiCreditCard />
    },{
      title:"Settings",
      icon:<FiSettings />
    },{
      title:"Support",
      icon:<FiInfo />
    },
  ]
  return (
    <div className='sidebar'>
        <div className="menuText">Menu</div>
        {
          menu.map((detail, index)=>{
            return <div className={`${index == active?"selectedMenuActive":"selectedMenu"}`} onClick={()=>{
              props.menu(index)
              setActive(index)
            }} key={index}>
              <div className="iconMenu">{detail.icon}</div>
              <div className="nameMenu">{detail.title}</div>
            </div>
          })
        }
    </div>
  )
}

export default Sidebar