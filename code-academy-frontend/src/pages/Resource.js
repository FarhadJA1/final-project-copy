import React from 'react'
import '../assets/style/Resource/Resource.scss'
import ResourceCreateBtn from '../components/Resource/ResourceCreateBtn'
import ResourceTable from '../components/Resource/ResourceTable'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Resource() {
    const [resources, setResources] = useState([]);
    const [input, setInput] = useState();
    const [id, setId] = useState();
    const [details,setDetails] = useState();
    

    async function GetDatas() {
        await axios.get(`https://localhost:44380/api/Resource/GetAll`)
            .then(res => {
                setResources(res.data);
            })
    }    
    

    async function CreateResource() {
        await axios.post("https://localhost:44380/api/Resource/CreateResource", {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
            })
            .catch(error => console.log(error));
    }
    const DeleteResource = () => {        
        axios.get(`https://localhost:44380/api/Resource/DeleteResource/${id}`)
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }
    async function UpdateResource() {        
        await axios.put(`https://localhost:44380/api/Resource/UpdateResource/${id}`, {
            name: input            
        })
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }
    async function ResourceDetails(id) {  
        
        await axios.get(`https://localhost:44380/api/Resource/ResourceDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }
        

    useEffect(() => {
        GetDatas();
    }, [])


    return (
        <div className='resource'>
            <ResourceCreateBtn input ={input} setInput={setInput} createResource={CreateResource} />
            <ResourceTable  resourceDetails={ResourceDetails} details={details} setInput={setInput} resources={resources} setId={setId} deleteResource={DeleteResource} updateResource={UpdateResource} id={id}/>
        </div>
    )
}

export default Resource
