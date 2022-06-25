import React from 'react'
import TermTable from '../components/Term/TermTable'
import '../assets/style/Term/Term.scss'
import TermCreateBtn from '../components/Term/TermCreateBtn'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Term() {
  const url = "https://localhost:44380/"
  const [hours, setHours] = useState([]);
  const [dayInput, setDayInput] = useState();
  const [timeInput, setTimeInput] = useState();
  const [id, setId] = useState();
  const [details, setDetails] = useState();

  async function GetDatas() {
    await axios.get(`${url}api/Hour/GetAll`)
      .then(res => {
        setHours(res.data);        
      })
  }
  console.log(hours);
  console.log(hours);
  useEffect(() => {
    GetDatas();
  }, [])
  async function CreateHour() {
    await axios.post(`${url}api/Hour/CreateHour`, {
      day: dayInput,
      time: timeInput
    })
      .then(res => {
        GetDatas();
        setDayInput("");
        setTimeInput("");
      })
      .catch(error => console.log(error));
  }
  const DeleteHour = () => {
    axios.get(`${url}api/Hour/DeleteHour/${id}`)
      .then(res => {
        GetDatas();
      })
      .catch(error => console.log(error));
  }
  async function UpdateHour() {
    await axios.put(`${url}api/Hour/UpdateHour/${id}`, {
      day: dayInput,
      time: timeInput
    })
      .then(res => {
        GetDatas();
        setDayInput("");
        setTimeInput("");
      })
      .catch(error => console.log(error));
  }
  async function HourDetails(id) {
    await axios.get(`${url}api/Hour/HourDetails/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }
  return (
    <div className='term'>
      <TermCreateBtn timeInput ={timeInput} setTimeInput={setTimeInput} dayInput={dayInput} setDayInput={setDayInput} createHour={CreateHour}/>
      <TermTable hourDetails={HourDetails} details={details} setTimeInput={setTimeInput} setDayInput={setDayInput} hours={hours} setId={setId} deleteHour={DeleteHour} updateHour={UpdateHour} id={id}/>
    </div>
  )
}

export default Term
