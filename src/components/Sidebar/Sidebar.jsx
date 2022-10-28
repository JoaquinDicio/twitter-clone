import React, { useContext, useState } from 'react'
import { MyContext } from '../../context/MyContextProvider'
import SidebarButton from '../SidebarButton/SidebarButton'
import TweetBtn from '../TweetBtn/TweetBtn'
import './Sidebar.css'

export default function Sidebar() {
  const [selected, setSelected] = useState('home')
  const {toggleModal}=useContext(MyContext)
//function to change tabs
  async function toggleActive(e) {
    await setSelected(e.target.innerText.toLowerCase())
  }

  return (
    <>
      <div className='sidebar d-flex align-content-center flex-column'>
        <SidebarButton onClick={toggleActive} active={selected == 'home' ? true : false} text={'Home'} icon={<i className="sb-btn-icon fa-solid fa-house"></i>} />
        <SidebarButton onClick={toggleActive} active={selected == 'explorar' ? true : false} text={'Explorar'} icon={<i className="sb-btn-icon fa-solid fa-hashtag"></i>} />
        <SidebarButton onClick={toggleActive} active={selected == 'notificaciones' ? true : false} text={'Notificaciones'} icon={<i className="sb-btn-icon fa-regular fa-bell"></i>} />
        <SidebarButton onClick={toggleActive} active={selected == 'mensajes' ? true : false} text={'Mensajes'} icon={<i className="sb-btn-icon fa-regular fa-envelope"></i>} />
        <SidebarButton onClick={toggleActive} active={selected == 'perfil' ? true : false} text={'Perfil'} icon={<i className="sb-btn-icon fa-regular fa-user"></i>} />
        <SidebarButton onClick={toggleActive} active={selected == 'mas opciones' ? true : false} text={'Mas opciones'} icon={<i className="sb-btn-icon fa-solid fa-gear"></i>} />
        <div className='d-flex align-content-center'>
          <TweetBtn onClick={toggleModal} classBtn={'sb-tweet-btn'}></TweetBtn>
        </div>
      </div>
    </>
  )
}
