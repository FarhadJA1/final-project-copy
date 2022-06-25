import React from 'react'
import '../assets/style/Education/Education.scss'
import CreateGroupType from '../components/Education/CreateGroupType'
import EducationTable from '../components/Education/EducationTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Education() {
    const url = "https://localhost:44380/"
    const [education, setEducation] = useState([]);
    const [input, setInput] = useState();
    const [id, setId] = useState();
    const [details,setDetails] = useState();

    async function GetDatas() {
        await axios.get(`${url}api/Education/GetAll`)
            .then(res => {
                setEducation(res.data);
            })
    }
    useEffect(() => {
        GetDatas();        
    }, [])

    async function CreateEducation() {
        await axios.post(`${url}api/Education/CreateEducation`, {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
            })
            .catch(error => console.log(error));
    }
    const DeleteEducation = () => {        
        axios.get(`${url}api/Education/DeleteEducation/${id}`)
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }
    async function UpdateEducation() {        
        await axios.put(`${url}api/Education/UpdateEducation/${id}`, {
            name: input            
        })
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }    
    async function EducationDetails(id) {        
        await axios.get(`${url}api/Education/EducationDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }


    return (
        <div className='education'>
            <CreateGroupType input={input} setInput={setInput} createPayment={CreateEducation}/>
            <EducationTable educationDetails={EducationDetails} details={details} setInput={setInput} education={education} id={id} setId={setId} deleteEducation={DeleteEducation} updateEducation={UpdateEducation}/>
        </div>
    )
}

export default Education
