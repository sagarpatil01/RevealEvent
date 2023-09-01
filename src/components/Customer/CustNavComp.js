import { Link} from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


export default function CustNavComp(){
    const[customer,setCustomer]=useState(null);
    useEffect(()=>{
        const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
        fetch("http://localhost:8080/getname?login_id="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedCustomer",JSON.stringify(obj))
            setCustomer(obj);
        })

    },[])
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/customer_home" className="nav-link px-3"><HomeIcon color="success" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profilecust" className="nav-link px-3">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/standup" className="nav-link px-3">Standup Comedy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/drama" className="nav-link px-3">Drama</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dance" className="nav-link px-3">Dance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music" className="nav-link px-3">Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/poetry" className="nav-link px-3">Poetry</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                    </ul>
                        {/* <h5><Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar></h5> */}
                    <div><h5>{customer && customer.first_name} {customer && customer.last_name} </h5></div>
                   

                </div>
            </nav>
            
       
    </div>
    

    )
    
}