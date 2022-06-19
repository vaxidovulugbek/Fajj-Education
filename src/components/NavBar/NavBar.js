import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { ContextProvider } from '../Main/Main';
import './NavBar.css'

function NavBar() {
  // let demo = useContext(ContextProvider)
  // console.log(demo);
  return (
    <div className='navbar'>
      <h1 className='navbar__title p20'>FAJJ EDUCATION</h1>
      <NavLink to='/' className={'navbar__link'}><div className='navbar__content p20 df ai'><i className='bx bxs-bar-chart-square navbar__icon'></i><p className='navbar__text'>Umumiy ma'lumotlar</p></div></NavLink>
      <NavLink to='oquvchilar' className={'navbar__link'}><div className='navbar__content p20 df ai'><FaBeer className='navbar__icon'/><p className='navbar__text'>O'quvchilar</p></div></NavLink>
      <NavLink to='guruhlar' className={'navbar__link'}><div className='navbar__content p20 df ai'><MdGroup className='navbar__icon'/><p className='navbar__text'>Guruhlar</p></div></NavLink>
      <NavLink to='darsjadvali' className={'navbar__link'}><div className='navbar__content p20 df ai'><FaBeer className='navbar__icon'/><p className='navbar__text'>Dars jadvali</p></div></NavLink>
      <NavLink to='hisobot' className={'navbar__link'}><div className='navbar__content p20 df ai'><FaBeer className='navbar__icon'/><p className='navbar__text'>Hisobotlar</p></div></NavLink>
      <NavLink to='oqituvchilar' className={'navbar__link'}><div className='navbar__content p20 df ai'><MdPerson className='navbar__icon'/><p className='navbar__text'>O'qituvchilar</p></div></NavLink>
      <NavLink to='sozlamalar' className={'navbar__link'}><div className='navbar__content p20 df ai'><MdSettings className='navbar__icon'/><p className='navbar__text'>Sozlama</p></div></NavLink>
      <NavLink to='logout' className={'navbar__link'}><div className='navbar__content p20 df ai'><FaBeer className='navbar__icon'/><p className='navbar__text'>Log Out</p></div></NavLink>
    </div>
  )
}

export default NavBar