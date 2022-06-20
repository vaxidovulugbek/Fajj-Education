import { createContext, useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DarsJadvali from '../DarsJadvali/DarsJadvali';
import Guruhlar from '../Guruhlar/Guruhlar';
import Header from '../Header.js/Header';
import Hisobot from '../Hisobot/Hisobot';
import NavBar from '../NavBar/NavBar';

import Oqituvchi from '../Oqituvchi/Oqituvchi';
import Oquvchilar from '../Oquvchilar/Oquvchilar';
import Sozlamalar from '../Sozlamalar/Sozlamalar';
import UmumiyMalumot from '../UmumiyMalumot/UmumiyMalumot';

import { Groups } from '../../Object/Object';
import { Students } from '../../Object/Object';
import { Teachers } from '../../Object/Object';
import Taxrirlash from '../Taxrirlash/Taxrirlash';
import OquvchiQoshish from '../OquvchiQoshish/OquvchiQoshish';
import GuruhTaxrirlash from '../GuruhTaxrirlash/GuruhTaxrirlash';
import GuruhQoshish from '../GuruhQoshish/GuruhQoshish';

export let ContextProvider = createContext()


function Main() {

  let [Student, setStudents] = useState(Students)
  let [Group, setGroups] = useState(Groups)
  let [editName,setEditName] = useState('')
  let [editPhone,setEditPhone] = useState('')
  let [editBirthday,setEditBirthday] = useState('')
  
  let [addName,setaddName] = useState('')
  let [addPhone,setaddPhone] = useState('')
  let [addFanlar,setaddFanlar] = useState('')
  let [addHolati,setaddHolati] = useState('')
  let [addTolov,setaddTolov] = useState('')

  let [editGroupSubject,setEditGroupSubject] = useState('')
  let [editTypeEducation,setEditTypeEducation] = useState('')
  let [editGroupSituation,setEditGroupSituation] = useState('')
  let [editGroupPayment,setEditGroupPayment] = useState('')
  let [editGroupTeacher,setEditGroupTeacher] = useState('')


  let [addGroupSubject,setAddGroupSubject] = useState('')
  let [addTypeEducation,setAddTypeEducation] = useState('')
  let [addGroupSituation,setAddGroupSituation] = useState('')
  let [addGroupPayment,setAddGroupPayment] = useState('')
  let [addGroupTeacher,setAddGroupTeacher] = useState('')
  
  // let [newStudent, setnewStudent] = useState([])

  let SchoolHendler = (state, action) => {
    if (action.type === 'delete') {
          setStudents(Student.filter(element => {
            return element.id !== action.id
        }))
     }
     if (action.type === 'editname') {
        setEditName(action.payload.target.value)
      }
    if (action.type === 'editbirthday') {
      setEditPhone(action.payload.target.value)
    }
    if (action.type === 'editphone') {
      setEditBirthday(action.payload.target.value)
    }
    if (action.type === 'editaction') {
      action.payload.name = editName
      action.payload.phone = editPhone
      action.payload.birthday = editBirthday
    }

    if (action.type === 'addname') {
      setaddName(action.payload.target.value)
    }
    if (action.type === 'addphone') {
      setaddPhone(action.payload.target.value)
    }
    if (action.type === 'addfanlar') {
      setaddFanlar(action.payload.target.value)
    }
    if (action.type === 'addholati') {
      setaddHolati(action.payload.target.value)
    }
    if (action.type === 'addtolov') {
      setaddTolov(action.payload.target.value)
    }
    if (action.type === 'addelement') {
      setStudents(Student.map(element => {
        return element.id++
      }))
      setStudents([{
        id:1,
        user_img: "https://source.unsplash.com/random?animal",
        name: addName,
        surName: "-",
        personalId: "p" + Math.floor(Math.random() * 10000),
        groupId: [11],
        phone: addPhone,
        type: addHolati,
        groupNum: 6,
        birthday:"-",
      },...Student])
    }
    if (action.type === 'groupdelete') {
      setGroups(Group.filter(element => {
        return element.groupId !== action.groupId
    }))
    }
    if (action.type === 'groupsubject') {
      setEditGroupSubject(action.payload.target.value)
    }
    if (action.type === 'grouptype') {
      setEditTypeEducation(action.payload.target.value)
    }
    if (action.type === 'groupsituation') {
      setEditGroupSituation(action.payload.target.value)
    }
    if (action.type === 'grouppayment') {
      setEditGroupPayment(action.payload.target.value)
    }
    if (action.type === 'groupteacher') {
      setEditGroupTeacher(action.payload.target.value)
    }
    if (action.type === 'groupsave') {
      action.payload.subject = editGroupSubject
      action.payload.educationType = editTypeEducation
      action.payload.status = editGroupSituation
      action.payload.payment = editGroupPayment
      action.payload.teacher = editGroupTeacher
    }
    const values = []
    if (action.type === 'groupsearch') {
        Group.map(item => {
          if(item.teacher.toLowerCase().includes(action.payload.target.value.toLowerCase())){
            values.push(item)
          }
        })
        setGroups(values)
    }

    if (action.type === 'addgroupsubject') {
      setAddGroupSubject(action.payload.target.value)
    }
    if (action.type === 'addgrouptype') {
      setAddTypeEducation(action.payload.target.value)
    }
    if (action.type === 'addgroupsituation') {
      setAddGroupSituation(action.payload.target.value)
    }
    if (action.type === 'addgrouppayment') {
      setAddGroupPayment(action.payload.target.value)
    }
    if (action.type === 'addgroupteacher') {
      setAddGroupTeacher(action.payload.target.value)
    }
    if (action.type === 'addgroup') {
      setGroups(Group.map(element => {
        return element.groupId++
      }))
      setGroups([{
        id:11,
        groupName: "yangi guruh",
        teacher: addGroupTeacher,
        groupId: 1,
        status:addGroupSituation,
        subject:addGroupSubject,
        educationType:addTypeEducation,
        payment:addGroupPayment,
      },...Group])
    }
   }
  
  let [state,dispatch] = useReducer(SchoolHendler,0)

  return (
    <div className="Main">
      <div className='df'>
        <ContextProvider.Provider value={{Student,Group,dispatch,setEditName,editName,setEditPhone,editPhone,setEditBirthday,editBirthday}}>
          <NavBar />
          {/* <button onClick={() => dispatch({type: 'decrement'})}>click</button> */}
          <div className='content' >
            <Header />
            <Routes>
              <Route path='/' element={<UmumiyMalumot />} />
              <Route path='oquvchilar' element={<Oquvchilar />} />
              <Route path='guruhlar' element={<Guruhlar />} />
              <Route path='darsjadvali' element={<DarsJadvali />} />
              <Route path='hisobot' element={<Hisobot />} />
              <Route path='oqituvchilar' element={<Oqituvchi />} />
              <Route path='sozlamalar' element={<Sozlamalar />} />
              <Route path='oqituvchilar/taxrirlash/:id' element={<Taxrirlash />} />
              <Route path='oqituvchilar/oquvchiqoshish' element={<OquvchiQoshish />} />
              <Route path='guruhtaxrirlash/:id' element={ <GuruhTaxrirlash />} />
              <Route path='guruhqoshish' element={<GuruhQoshish />} />
            </Routes>
          </div>
        </ContextProvider.Provider>
      </div>
    </div>
  );
}

export default Main;
