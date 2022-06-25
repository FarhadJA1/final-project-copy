import React from 'react'
import '../assets/style/Teacher/Teacher.scss'
import TeacherCreateButton from '../components/Teacher/TeacherCreateButton'
import TeacherTable from '../components/Teacher/TeacherTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Teacher() {
    const url = "https://localhost:44380"

    const [teachers, setTeachers] = useState([]);
    const [professions,setProfessions] = useState([]);

    const [nameInput, setNameInput] = useState();
    const [surnameInput, setSurnameInput] = useState();
    const [birthdayInput, setBirthdayInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [salaryInput, setSalaryInput] = useState();
    const [professionInput,setProfessionInput] = useState();
    const [details, setDetails] = useState();

    const [id, setId] = useState();

    async function GetTeachers() {
        await axios.get(`${url}/api/Teacher/GetAll`)
            .then(res => {
                setTeachers(res.data);
            })
    }
    async function GetProfessions() {
        await axios.get(`${url}/api/Profession/GetAll`)
            .then(res => {
                setProfessions(res.data);
            })
    }
    useEffect(() => {
        GetTeachers();
        GetProfessions();
        
    }, [])
    async function TeacherDetails(id) {

        await axios.get(`${url}/api/Teacher/TeacherDetails/${id}`)
          .then(res => {
            setDetails(res.data);
          })
      }
    async function CreateTeacher() {
        await axios.post(`${url}/api/Teacher/CreateTeacher`, {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            birthday: birthdayInput,
            phone: phoneInput,
            salary: salaryInput,
            professionId:professionInput,
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
            })
            .catch(error => console.log(error));
    }
    const DeleteTeacher = () => {
        debugger
        axios.get(`${url}/api/Teacher/DeleteTeacher/${id}`)
            .then(res => {
                GetTeachers();
            })
            .catch(error => console.log(error));
    }

    async function UpdateTeacher() {
        debugger
        await axios.put(`${url}/api/Teacher/UpdateTeacher/${id}`, {
            
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            birthday: birthdayInput,
            phone: phoneInput,
            salary: salaryInput,
            professionId:professionInput
        })
            .then(res => {
                GetTeachers();
                setNameInput("");
                setSurnameInput("");
                setBirthdayInput("");
                setPhoneInput("");
                setEmailInput("");
                setSalaryInput("");
            })
            .catch(error => console.log(error));
    }


    return (
        <div className='teacher'>
            <TeacherCreateButton
                nameInput={nameInput} setNameInput={setNameInput}
                surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                emailInput={emailInput} setEmailInput={setEmailInput}
                phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                professionInput={professionInput} setProfessionInput={setProfessionInput}
                professions={professions}
                createTeacher={CreateTeacher}
            />
            <TeacherTable
                nameInput={nameInput} setNameInput={setNameInput}
                surnameInput={surnameInput} setSurnameInput={setSurnameInput}
                birthdayInput={birthdayInput} setBirthdayInput={setBirthdayInput}
                emailInput={emailInput} setEmailInput={setEmailInput}
                phoneInput={phoneInput} setPhoneInput={setPhoneInput}
                salaryInput={salaryInput} setSalaryInput={setSalaryInput}
                teachers={teachers} setId={setId} id={id}
                professionInput={professionInput} setProfessionInput={setProfessionInput}
                professions={professions}
                deleteTeacher={DeleteTeacher}
                updateTeacher={UpdateTeacher}
                details={details} setDetails={setDetails}
                teacherDetails={TeacherDetails}
            />
        </div>
    )
}

export default Teacher
