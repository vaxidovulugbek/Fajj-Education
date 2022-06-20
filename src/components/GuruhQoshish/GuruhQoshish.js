import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'

function GuruhQoshish() {
  let student = useContext(ContextProvider)
  return ( <div className='editgroup m20'>
        <p className='editgroup__title'>Guruh qo'shish</p>
        <form className='editgroup__form df'> 
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder='Fanlar' onChange={event => student.dispatch({type: 'addgroupsubject', payload: event})} />
            <label className='editgroup__label'>Fan</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder="Ta'lim shakli" onChange={event => student.dispatch({type: 'addgrouptype', payload: event})} />
            <label className='editgroup__label'>Ta'lim shakli</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder='Guruh holati' onChange={event => student.dispatch({type: 'addgroupsituation', payload: event})} />
            <label className='editgroup__label'>Holati</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input df column' type="number" placeholder="To'lov miqdori" onChange={event => student.dispatch({type: 'addgrouppayment', payload: event})} />
            <label className='editgroup__label'>Tolov miqdori</label>
          </div>
          <div className='editgroup__inputc df column'>
            <input className='editgroup__input' type="text" placeholder="Guruh o'qituvchisi" onChange={event => student.dispatch({type: 'addgroupteacher', payload: event})} />
            <label className='editgroup__label'>O'qituvchi</label>
          </div>
        <div className='editgroup__btn-group df ai'>
          <Link to={'/guruhlar'}><button className='editgroup__cansel-btn'>Bekor qilish</button></Link>
          <Link to={`/guruhlar`}><button className='editgroup__save-btn' onClick={() => student.dispatch({type: 'addgroup'})}>Saqlash</button></Link>
        </div>
        </form>
      </div>
  )
}

export default GuruhQoshish