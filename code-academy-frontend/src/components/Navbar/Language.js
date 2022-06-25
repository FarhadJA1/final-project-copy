import React from 'react'
import '../../assets/style/Navigation/Language.scss'
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
function Language() {
    function changeLng(value) {
        document.cookie = `i18next=${value}`;
        window.location.reload(true);
    }
    return (
        <div className="btn-group language">          
            <select className='btn btn-outline-light' name="" id="" defaultValue={Cookies.get('i18next')} onChange={(e) => changeLng(e.target.value)}>
                <option className='select-option' value="en">
                    English</option>
                <option className='select-option' value="az">
                    Azərbaycan</option>
            </select>
        </div>
    )
}

export default Language
