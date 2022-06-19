import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'
import './GuruhTaxrirlash.css'
function GuruhTaxrirlash() {
  let student = useContext(ContextProvider)
  let locationgroup = useLocation()
  let locationgroup1 = locationgroup.pathname.split('/').at(-1)
  return (
    student.Group.map((el,i) => {
      if(+locationgroup1 === el.groupId){
        return <div className='editgroup m20' key={i + 100}>
        <p className='editgroup__title'>Guruh taxrirlash</p>
        <form className='editgroup__form df'> 
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder='Fanlar' defaultValue={el.subject} onChange={event => student.dispatch({type: 'groupsubject', payload: event})} />
            <label className='editgroup__label'>Guruhga o'rnatilgan fanni yozing</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder="Ta'lim shakli" defaultValue={el.educationType} onChange={event => student.dispatch({type: 'grouptype', payload: event})} />
            <label className='editgroup__label'>Guruhning ta'lim shaklini yozing</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder='Guruh holati' defaultValue={el.status} onChange={event => student.dispatch({type: 'groupsituation', payload: event})} />
            <label className='editgroup__label'>Guruh holatini yozing</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input df column' type="number" placeholder="To'lov miqdori" defaultValue={el.payment} onChange={event => student.dispatch({type: 'grouppayment', payload: event})} />
            <label className='editgroup__label'>Har bir o'quvchi uchun to'lov miqdorini kiriting</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder="Guruh o'qituvchisi" defaultValue={el.teacher} onChange={event => student.dispatch({type: 'groupteacher', payload: event})} />
            <label className='editgroup__label'>Guruhga ta'lim beradigan o'qituvchini yozing</label>
          </div>
        <div className='editgroup__btn-group df ai'>
          <Link to={'/guruhlar'}><button className='editgroup__cansel-btn'>Bekor qilish</button></Link>
          <Link to={`/guruhlar`}><button className='editgroup__save-btn' onClick={() => student.dispatch({type: 'groupsave', payload:el})}>Saqlash</button></Link>
        </div>
        </form>
      </div>
      }
    })
  )
}

export default GuruhTaxrirlash