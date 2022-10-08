import React, { useState } from 'react'
import SidebarButton from '../SidebarButton/SidebarButton'
import TweetBtn from '../TweetBtn/TweetBtn'
import './Sidebar.css'

export default function Sidebar() {
  const [selected, setSelected] = useState('home')

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
          <TweetBtn></TweetBtn>
        </div>
      </div>
    </>
  )
}
