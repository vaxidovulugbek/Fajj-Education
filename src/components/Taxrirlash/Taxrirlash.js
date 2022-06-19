import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'
import './Taxrirlash.css'
function Taxrirlash() {
  let student = useContext(ContextProvider)



  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)
  return (
    <div className='taxrirlash'>
      <h2 className='taxrirlash__title'>O'quvchini taxrirlash</h2>

      {
       student.Student.map((el, key) => {
        if(+location1 === el.id){
            return <div className='taxrirlash__content' key={key}>
            <div className='taxrirlash__header df ai between'>
              <div className='taxrirlash__headerl df ai'>
                  <img className='taxrirlash__pic' src="https://img.moyo.ua/img/news/1663/51_400x400x_1653562252.jpg" alt="user" />
                  <div>
                    <h4 className='taxrirlash__header-title'>{el.name}</h4>
                    <p className='taxrirlash__header-phone'>{el.phone}</p>
                  </div>
              </div>
              <div>
                  <p><span className='taxrirlash__malumot'>Guruhlar:</span><span>1</span><span>ta</span></p>
                  <p><span className='taxrirlash__malumot'>Jami qoldirilgan darslar:</span><span>0</span><span>ta</span></p>
              </div>
            </div>
            <form className='taxrirlash__form df ai between'>
              <div className='taxrirlash__form-item df column'>
                <input className='taxrirlash__input' type="text" placeholder='Edit name' defaultValue={el.name} onChange={event => student.dispatch({type: 'editname', payload: event})} />
                <label className='taxrirlash__label'>O'quvchining ismini kiriting</label>
              </div>
              <div className='taxrirlash__form-item df column'>
                <input className='taxrirlash__input' type="text" placeholder='Edit birthday date' defaultValue={el.birthday} onChange={event => student.dispatch({type: 'editbirthday', payload: event})} />
                <label className='taxrirlash__label'>O'quvchining tug'ilgan sanasini kiriting</label>
              </div>
              <div className='taxrirlash__form-item df column'>
                <input className='taxrirlash__input' type="number" placeholder='Edit phone number' defaultValue={el.phone} onChange={event => student.dispatch({type: 'editphone', payload: event})} />
                <label className='taxrirlash__label'>O'quvchining telefon raqamini kiriting</label>
              </div>
            </form>
              <div className='taxrirlash__btngroup df ai'>
                <Link to={'/oqituvchilar'}><button className='taxrirlash__cansel-btn'>Bekor qilish</button></Link>
                <Link to={'/oqituvchilar'}><button className='taxrirlash__save-btn' onClick={() => student.dispatch({type: 'editaction', payload: el})}  >Saqlash</button></Link>
              </div>
          </div>
        }
       }
       )}

    </div>
  )
}

export default Taxrirlash