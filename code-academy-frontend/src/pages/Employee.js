import React from 'react'
import EmployeeCreateBtn from '../components/Employee/EmployeeCreateBtn'
import '../assets/style/Employee/Employee.scss'
import EmployeeTable from '../components/Employee/EmployeeTable'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Employee() {
  const url = "https://localhost:44380"
  const [employees, setEmployees] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [surnameInput, setSurnameInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState();

  async function GetEmployees() {
    const response = await axios.get(`${url}/api/Account/GetAll`)
      .catch(error => console.log(error));
    setEmployees(response.data);
  }
  useEffect(() => {
    GetEmployees();
  }, []);

  async function CreateEmployee() {
debugger
    await axios.post(`${url}/api/Account/Register`, {
      name:nameInput,
      surname:surnameInput,
      phoneNumber:phoneInput,
      email:emailInput
    })
      .then(res => {
        GetEmployees();
        setEmailInput("");
        setNameInput("");
        setPhoneInput();
        setSurnameInput("");
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='employee'>
      <EmployeeCreateBtn
        nameInput={nameInput} setNameInput={setNameInput}
        surnameInput={surnameInput} setSurnameInput={setSurnameInput}
        phoneInput={phoneInput} setPhoneInput={setPhoneInput}
        emailInput={emailInput} setEmailInput={setEmailInput}
        CreateEmployee={CreateEmployee}
      />
      <EmployeeTable employees={employees} />
    </div>
  )
}

export default Employee
