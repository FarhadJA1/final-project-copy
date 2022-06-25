import {Navigate,Outlet} from 'react-router-dom'

function Protection() {
    let user = localStorage.getItem('token');
    return user?<Outlet/>:<Navigate to={"/login"}/>
}

export default Protection
