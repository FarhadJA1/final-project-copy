import React from 'react'
import '../assets/style/PayType/PayType.scss'
import PaymentCreateButton from '../components/PayType/PaymentCreateButton'
import PayTypeTable from '../components/PayType/PayTypeTable'
import { useState, useEffect } from 'react';
import axios from 'axios'
function PayType() {
    const url = "https://localhost:44380/"
    const [payment, setPayment] = useState([]);
    const [input, setInput] = useState();
    const [id, setId] = useState();
    const [details,setDetails] = useState();

    async function GetDatas() {
        await axios.get(`${url}api/PayType/GetAll`)
            .then(res => {
                setPayment(res.data);
            })
    }
    useEffect(() => {
        GetDatas();        
    }, [])
    async function CreatePayment() {
        await axios.post(`${url}api/PayType/CreatePayment`, {
            name: input
        })
            .then(res => {
                GetDatas();
                setInput("")
            })
            .catch(error => console.log(error));
    }
    const DeletePayment = () => {        
        axios.get(`${url}api/PayType/DeletePayment/${id}`)
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }
    async function UpdatePayment() {        
        await axios.put(`${url}api/PayType/UpdatePayment/${id}`, {
            name: input            
        })
            .then(res => {
                GetDatas();
            })
            .catch(error => console.log(error));
    }    
    async function PaymentDetails(id) { 
        debugger       
        await axios.get(`${url}api/PayType/PaymentDetails/${id}`)
            .then(res => {
                setDetails(res.data);
            })
    }
    
    
    return (
        <div className='pay-type'>
            <PaymentCreateButton input={input} setInput={setInput} createPayment={CreatePayment}/>
            <PayTypeTable paymentDetails={PaymentDetails} details={details} setInput={setInput} payment={payment} id={id} setId={setId} deletePayment={DeletePayment} updatePayment={UpdatePayment}/>
        </div>
    )
}

export default PayType
