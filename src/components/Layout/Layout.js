import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Form from '../Form/Form'
import style from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header/>

      <main>
        <Form/>
        { children }
        {/* <Navbar/> */}
      </main>
      {/* <p>Drag and drop to reorder list</p> */}
    </div>
  )
}

export default Layout