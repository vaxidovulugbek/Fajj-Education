import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../Main/Main'
import './Guruhlar.css'
function Guruhlar() {
  let student = useContext(ContextProvider)
  return (
    <div className='guruhlar m20'>
       <div className='guruhlar__header df ai between'>
        <div className='df ai'>
          <h2 className='guruhlar__title'>Guruhlar</h2>          
          <Link to={'/oqituvchilar/oquvchiqoshish'}><button className='guruhlar__addbtn' >Guruh qo'shish</button></Link>
        </div>
        <form className='guruhlar__form df ai'>
          <i className='bx bx-search'></i>
          <input className='guruhlar__search' type="search" placeholder="O'quvchini qidirish" onChange={event => student.dispatch({type: 'groupsearch', payload: event})}  />
        </form>
      </div>
      <div>
        <table className="oqituvchi__tabel">
        <thead className="oqituvchi__thead">
          <tr className="oqituvchi__tr">
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn" id="namebtn"># </button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn" id="mailbtn">Guruh Nomi</button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn" id="numbtn">Holati </button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn" id="depabtn">Fan nomi</button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn">Ta'lim shakli </button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn">to'lov miqdori </button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn">o'qtiuvchi </button></th>
            <th className="oqituvchi__th"><button className="oqituvchi__thbtn"></button></th>
          </tr>
        </thead>
        <tbody className="oqituvchi__body" id="tbody">
          {
            student.Group.map((item, key) => {
              return(
                <tr key={key+1} className="oqituvchi__tr">
                  <td className="oqituvchi__td">{item.groupId}</td>
                  <td className="oqituvchi__td">{item.groupName}</td>
                  <td className="oqituvchi__td">{item.status}</td>
                  <td className="oqituvchi__td">{item.subject}</td>
                  <td className="oqituvchi__td">{item.educationType}</td>
                  <td className="oqituvchi__td">UZS {item.payment}</td>
                  <td className="oqituvchi__td">
                    <div className="df ai">
                      <div className="oqituvchi__avabox">
                        <img className="oqituvchi__ava" src="https://picsum.photos/id/46/60" alt="user" />
                      </div>
                      <h3 className="oqituvchi__names">{item.teacher}</h3>
                    </div>
                  </td>
                  <td className="oqituvchi__td">
                    <Link to={`/guruhtaxrirlash/${item.groupId}`}><button className="oqituvchi__edit"><i className="bx bxs-pencil" /></button></Link>
                    <button className="oqituvchi__xbtn" onClick={() => student.dispatch({type: 'groupdelete',groupId:item.groupId })}><i className="bx bx-x" /></button>
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

export default Guruhlar