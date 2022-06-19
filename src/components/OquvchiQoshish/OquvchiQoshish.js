import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'
import './OquvchiQoshish.css'
function OquvchiQoshish() {
  let student = useContext(ContextProvider)
  return (
    <div className='addstudent'>
        <h2 className='addstudent__title'>O'quvchi qo'shish</h2>
        <div className='addstudent__content'>
          <div className='addstudent__info df between'>
             <div className='addstudent__add-img'>
               <p className='addstudent__img-title'>O'quvchining rasmi</p>
               <div className='addstudent__imgcon'>
                 <i className='bx bxs-upvote'></i>
                 <p className='addstudent__img-text'>Rasmni tanlang</p>
               </div>

             </div>
             <form className='addstudent__form df column'>
               <div className='df column mb20'>
                 <input className='addstudent__input' type="text" placeholder='Ismi'  onChange={event => student.dispatch({type: 'addname', payload: event})} />
                 <label className='addstudent__label'>O'quvchining ismini kiriting</label>
               </div>
               <div className='df column mb20'>
                 <input className='addstudent__input' type="text" placeholder='Telefon raqam' onChange={event => student.dispatch({type: 'addphone', payload: event})} />
                 <label className='addstudent__label'>O'quvchining telefon raqamini kiriting</label>
               </div>
               <div className='df column mb20'>
                 <input className='addstudent__input' type="text" placeholder='Fanlar' onChange={event => student.dispatch({type: 'addfanlar', payload: event})} />
                 <label className='addstudent__label'>O'quvchining fanlarini kiriting</label>
               </div>
               <div className='df column mb20'>
                 <input className='addstudent__input' type="text" placeholder='Holati' onChange={event => student.dispatch({type: 'addholati', payload: event})} />
                 <label className='addstudent__label'>O'quvchining holatini kiriting</label>
               </div>
               <div className='df column mb20'>
                 <input className='addstudent__input' type="text" placeholder="To'lov turi" onChange={event => student.dispatch({type: 'addtolov', payload: event})} />
                 <label className='addstudent__label'>To'lov turini tanlang</label>
               </div>
             </form>
          </div>
          <div className='addstudent__btn-group df ai'>
            <Link to={'/oqituvchilar'}><button className='addstudent__cansel-btn'>Bekor qilish</button></Link>
            <Link to={'/oqituvchilar'}><button className='addstudent__save-btn' onClick={() => student.dispatch({type: 'addelement'})}>Qo'shish</button></Link>
          </div>
        </div>
    </div>
  )
}

export default OquvchiQoshish