import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'
import './Hisobot.css'
function Hisobot() {

  let student = useContext(ContextProvider)

  return (
    <div className='hisobot'>
      <div className='hisobot__header df ai between'>
        <div className='df ai'>
          <h2 className='hisobot__title'>Guruh ma'lumoti</h2>          
          <Link to={'/oqituvchilar/oquvchiqoshish'}><button className='hisobot__addbtn' >O'quvchi qo'shish</button></Link>
        </div>
        <form className='hisobot__form df ai'>
          <i class='bx bx-search'></i>
          <input className='hisobot__search' type="search" placeholder="O'quvchini qidirish" />
        </form>
      </div>

      <div className='hisobot__content'>
        <div className='hisobot__content-header df between'>
          <div>
              <p className='hisobot__guruh'>Guruh <span>#1</span></p>
              <div className='df'>
                  <img className='hisobot__userimg' src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" alt="teacher-user" />
                  <div>
                    <h4 className='hisobot__user-title'>Vaxidov Ulugbek</h4>
                    <span className='hisobot__user-oylik'>oylik</span>
                    <p className='hisobot__uzs'>UZS <span>200000</span></p>
                    <p className='hisobot__holati'>Holati:active</p>
                  </div>
              </div>
          </div>
          <div className='hisobot__btn-group df column'>
            <p className='hisobot__science'>Matematika</p>
            <button className='hisobot__edit-btn'>Taxrirlash</button>
            <button className='hisobot__back-btn'>Ortga</button>
          </div>
        </div>

        <div className='hisobot__content-hero'>
            <div>
              <div className='df ai'><p className='hisobot__content-text'>To'lov miqdori:</p><div><span className='hisobot__m5'>UZS</span><span>200 000</span></div></div>
              <div className='df ai'><p className='hisobot__content-text'>Ta'lim shakli:</p><span className='hisobot__m5'>Sanoqli</span></div>
              <div className='df ai'><p className='hisobot__content-text'>To'lov uchun darslar soni:</p><span className='hisobot__m5'>12</span></div>
            </div>
        </div>

        <table className="oqituvchi__tabel">
                <thead className="oqituvchi__thead">
                  <tr className="oqituvchi__tr">
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn"># </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">O'quvchi</button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Oylik umumiy to'lov</button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Guruhdagi chegirma</button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Hisobdagi qoldiq </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Vaqt </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn"></button></th>
                  </tr>
                </thead>
                <tbody className="oqituvchi__body" id="tbody">
                    {
                      student.Student.map((item, key) => {
                        return(
                          <tr key={key+782} className="oqituvchi__tr">
                            <td className="oqituvchi__td">{item.id}</td>
                            <td className="oqituvchi__td">
                              <div className="df ai">
                                <div className="oqituvchi__avabox">
                                  <img className="oqituvchi__ava" src="https://picsum.photos/id/57/60" alt="user" />
                                </div>
                                <h3 className="oqituvchi__names">{item.name}</h3>
                              </div>
                              </td>
                            <td className="oqituvchi__td">UZS {item.oyliktolov}</td>
                            <td className="oqituvchi__td">0%</td>
                            <td className="oqituvchi__td">Yanvar 26, 2020</td>
                            <td className="oqituvchi__td">UZS <span>{item.hisobdagiqoldiq}</span></td>
                            <td className="oqituvchi__td">
                              <button className="oqituvchi__error"><i className='bx bxs-error-circle'></i></button>
                              <Link to={`/oqituvchilar/taxrirlash/${item.id}`}><button className="oqituvchi__edit"><i className="bx bxs-pencil" /></button></Link>
                              <button className="oqituvchi__xbtn" onClick={() => student.dispatch({type: 'delete', id:item.id })} ><i className="bx bx-x" /></button>
                              </td>
                            </tr>
                        )
                     })
                   }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Hisobot