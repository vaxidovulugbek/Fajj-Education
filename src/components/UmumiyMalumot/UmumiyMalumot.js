import React from 'react'
import './UmumiyMalumot.css'

import statisticone from '../../assets/imgs/sta1.png'
import statistictwo from '../../assets/imgs/sta2.png'
import statisticthree from '../../assets/imgs/sta3.png'               

function UmumiyMalumot() {
  return (
    <div className='umumiym'>
      <h2 className='umumiym__title'>Umumiy Malumot</h2>
      <div className='umumiym__info df ai between'>
        <div className='umumiym__info-item'>
          <p className='umumiym__info-text'>O'quvchilar</p>
          <div className='df ai between'>
            <div>
              <p className='umimiym__num'><span className='mr5'>299</span><span>nafar</span></p>
              <div className='umumiym__falenumm df ai'> 
                <i className='bx bx-down-arrow-alt'></i>
                <p><span className='umumiym__falenum'>5</span>nafar</p>
              </div>
            </div>
              <img src={statisticthree} alt="statistic" />
          </div>
        </div>
        <div className='umumiym__info-item'>
          <p className='umumiym__info-text'>O'qituvchilar</p>
          <div className='df ai between'>
            <div>
              <p className='umimiym__num'><span className='mr5'>7</span><span>nafar</span></p>
              <div className='umumiym__falenumm df ai'> 
                <i className='bx bx-down-arrow-alt'></i>
                <p><span className='umumiym__falenum'>1</span>nafar</p>
              </div>
            </div>
              <img src={statistictwo} alt="statistic" />
          </div>
        </div>
        <div className='umumiym__info-item'>
          <p className='umumiym__info-text'>Guruhlar</p>
          <div className='df ai between'>
            <div>
              <p className='umimiym__num'><span className='mr5'>33</span><span>ta</span></p>
              <div className='umumiym__falenumm df ai'> 
                <i className='bx bx-down-arrow-alt'></i>
                <p><span className='umumiym__falenum'>1</span>nafar</p>
              </div>
            </div>
              <img src={statisticone} alt="statistic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UmumiyMalumot