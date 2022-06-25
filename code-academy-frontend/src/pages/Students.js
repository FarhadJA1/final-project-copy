import React from 'react'
import '../assets/style/Student/Student.scss'
import StudentCreateBtn from '../components/Student/StudentCreateBtn'
import StudentsTable from '../components/Student/StudentsTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Students() {
  const url = "https://localhost:44380"

  const [students, setStudents] = useState([]);

  const [nameInput, setNameInput] = useState();
  const [surnameInput, setSurnameInput] = useState();
  const [birthdayInput, setBirthdayInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [paymentInput, setPaymentInput] = useState();
  const [resourceInput, setResourceInput] = useState();
  const [details, setDetails] = useState();


  const [payment, setPayment] = useState([]);
  const [resources, setResources] = useState([]);
  const [id, setId] = useState();


  async function GetStudents() {
    await axios.get(`${url}/api/Student/GetAll`)
      .then(res => {
        setStudents(res.data);
        console.log(students);
      })
  }
  async function GetResources() {
    await axios.get(`${url}/api/Resource/GetAll`)
      .then(res => {
        setResources(res.data);
      })
  }
  async function GetPayments() {
    await axios.get(`${url}/api/PayType/GetAll`)
      .then(res => {
        setPayment(res.data);
      })
  }
  useEffect(() => {
    GetStudents();
    GetResources();
    GetPayments();

  }, [])

  async function CreateStudent() {
    await axios.post(`${url}/api/Student/CreateStudent`, {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      birthday: birthdayInput,
      phone: phoneInput,
      payTypeId: paymentInput,
      resourceId: resourceInput
    })
      .then(res => {
        GetStudents();
        GetResources();
        GetPayments();
        setNameInput("");
        setSurnameInput("");
        setBirthdayInput("");
        setPhoneInput("");
        setEmailInput("");
        setResourceInput("");
      })
      .catch(error => console.log(error));
  }

  const DeleteStudent = () => {
    axios.get(`${url}/api/Student/DeleteStudent/${id}`)
      .then(res => {
        GetStudents();
      })
      .catch(error => console.log(error));
  }
  async function StudentDetails(id) {

    await axios.get(`${url}/api/Student/StudenteDetails/${id}`)
      .then(res => {
        setDetails(res.data);
      })
  }


  async function UpdateStudent() {
    await axios.put(`${url}/api/Student/UpdateStudent/${id}`, {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      birthday: birthdayInput,
      phone: phoneInput,
      payTypeId: paymentInput,
      resourceId: resourceInput
    })
      .then(res => {
        GetStudents();
        GetResources();
        GetPayments();
        setNameInput("");
        setSurnameInput("");
        setBirthdayInput("");
        setPhoneInput("");
        setEmailInput("");
        setResourceInput("");
        setPaymentInput("")
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='student'>
      <StudentCreateBtn
        nameInput={nameInput} setNameInput={setNameInput}
        surnameInput={surnameInput} setSurnameInput={setSurnameInput}
        birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
        paymentInput={paymentInput} setPaymentInput={setPaymentInput}
        resourceInput={resourceInput} setResourceInput={setResourceInput}
        emailInput={emailInput} setEmailInput={setEmailInput}
        phoneInput={phoneInput} setPhoneInput={setPhoneInput}
        payments={payment} setPayment={setPayment}
        resources={resources} setResources={setResources}
        createStudent={CreateStudent}
      />

      <StudentsTable students={students}
        nameInput={nameInput} setNameInput={setNameInput}
        surnameInput={surnameInput} setSurnameInput={setSurnameInput}
        birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
        paymentInput={paymentInput} setPaymentInput={setPaymentInput}
        resourceInput={resourceInput} setResourceInput={setResourceInput}
        emailInput={emailInput} setEmailInput={setEmailInput}
        phoneInput={phoneInput} setPhoneInput={setPhoneInput}
        payments={payment} setPayment={setPayment}
        resources={resources} setResources={setResources}
        deleteStudent={DeleteStudent}
        updateStudent={UpdateStudent}
        setId={setId} id={id}
        details={details} setDetails={setDetails}
        studentDetails={StudentDetails}
      />
    </div>
  )
}

export default Students
