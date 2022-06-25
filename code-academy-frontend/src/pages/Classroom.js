import React from 'react'
import '../assets/style/Classroom/Classroom.scss'
import ClassroomCreateBtn from '../components/Classroom/ClassroomCreateBtn'
import ClassroomTable from '../components/Classroom/ClassroomTable'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Classroom() {
  const url = "https://localhost:44380/"
  const [classrooms, setClassroom] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [capacityInput, setCapacityInput] = useState();
  const [id, setId] = useState();
  const [details, setDetails] = useState();

  async function GetDatas() {
    await axios.get(`${url}api/Classroom/GetAll`)
      .then(res => {
        setClassroom(res.data);
      })
  }
  
 
  useEffect(() => {
    GetDatas();
  }, [])

  async function CreateClassroom() {   
    await axios.post(`${url}api/Classroom/CreateClassroom`, {
      name: nameInput,
      capacity: capacityInput
    })
      .then(res => {
        GetDatas();
        setNameInput("");
        setCapacityInput("");
      })
      .catch(error => console.log(error));
  }
  const DeleteClassroom = () => {
    axios.get(`${url}api/Classroom/DeleteClassroom/${id}`)
      .then(res => {
        GetDatas();
      })
      .catch(error => console.log(error));
  }
  async function UpdateClassroom() {
    await axios.put(`${url}api/Classroom/UpdateClassroom/${id}`, {
      name: nameInput,
      capacity: capacityInput
    })
      .then(res => {
        GetDatas();
        setNameInput("");
        setCapacityInput("");
      })
      .catch(error => console.log(error));
  }
  async function ClassroomDetails(id) {
    await axios.get(`${url}api/Classroom/ResourceClassroom/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }
  return (
    <div className='classroom'>
      <ClassroomCreateBtn nameInput={nameInput} setNameInput={setNameInput} capacityInput={capacityInput} setCapacityInput={setCapacityInput} createClassroom={CreateClassroom} />
      <ClassroomTable classroomDetails={ClassroomDetails} details={details} nameInput={nameInput} setNameInput={setNameInput} capacityInput={capacityInput} setCapacityInput={setCapacityInput} classrooms={classrooms} id={id} setId={setId} deleteClassroom={DeleteClassroom} updateClassroom={UpdateClassroom} />
    </div>
  )
}

export default Classroom
