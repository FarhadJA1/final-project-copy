import React from 'react'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { useState, useEffect } from 'react';
function Welcome() {
  const { t } = useTranslation();
  let token = localStorage.getItem('token');
  const url = "https://localhost:44380"
  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
  const [user, setUser] = useState();
  useEffect(() => {
    if (token != null) {

      let email = parseJwt(token).sub[1]
      axios.get(`${url}/api/Account/GetUserByEmail/${email}`)
        .then((res) => {
          setUser(res.data)
        })
    }
  }, [])
  return (
    <div className='container'>
      <div className="row welcome">
        <div className="col-lg-6 welcome-text">
          <h1>{t("welcome")+" "+user?.fullName.substring(0,6)}</h1>
          <h5>{t("lets")}</h5>
        </div>
        <div className="col-lg-6">
          <img className='welcome-img' src={require('../../assets/img/welcome-img.png')} alt="welcome" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
