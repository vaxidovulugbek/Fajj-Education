import React, { useContext } from 'react'
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import { ContextProvider } from '../Main/Main';
import Taxrirlash from '../Taxrirlash/Taxrirlash';

import './Oqituvchi.css'

function Oqituvchi() {

  let student = useContext(ContextProvider)
  // console.log(student.dispatch);
  return (
         <div className="oqituvchi">
            <div className="oqituvchi__header df ai between">
              <div className="df ai">
                <h2 className="oqituvchi__title">O'quvchilar</h2>
                <Link to={'oquvchiqoshish'}><button className="oqituvchi__btnadd">O'quvchi qo'shish</button></Link>
              </div>
              <form className="oqituvchi__form df ai">
                <i className="bx bx-search"></i>
                  <input className="oqituvchi__search" type="search" placeholder="Ismi bo'yicha qidirish" />
                </form>
              </div>
             {/* { student.Student.map(item =>{
                  return <div>
                    <h1>{item.name}</h1>
                  </div>
              })} */}
              <table className="oqituvchi__tabel">
                <thead className="oqituvchi__thead">
                  <tr className="oqituvchi__tr">
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn" id="namebtn"># </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn" id="mailbtn">Ismi</button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn" id="numbtn">Guruh </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn" id="depabtn">Telefon Raqam</button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Guruhlar </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Vaqt </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">holati </button></th>
                    <th className="oqituvchi__thh"><button className="oqituvchi__thbtn">Hisob holati </button></th>
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
                            <td className="oqituvchi__td">Guruh #{item.groupNum}</td>
                            <td className="oqituvchi__td">{item.phone}</td>
                            <td className="oqituvchi__td">{item.group} 2 ta</td>
                            <td className="oqituvchi__td">Yanvar 26, 2020</td>
                            <td className="oqituvchi__td">Muzlatilgan</td>
                            <td className="oqituvchi__td">UZS 100,000</td>
                            <td className="oqituvchi__td">
                              <button className="oqituvchi__error"><i className='bx bxs-error-circle'></i></button>
                              <Link to={`/oqituvchilar/taxrirlash/${item.id}`}><button className="oqituvchi__edit"><i className="bx bxs-pencil" /></button></Link>
                              {/* <Routes>
                                 <Route path='oqituvchilar/taxrirlash' element={<Taxrirlash />} />
                              </Routes> */}
                              <button className="oqituvchi__xbtn" onClick={() => student.dispatch({type: 'delete', id:item.id })} ><i className="bx bx-x" /></button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
          </div>
  )
}

export default Oqituvchi