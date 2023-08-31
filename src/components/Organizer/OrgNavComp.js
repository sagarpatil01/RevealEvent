import { Link} from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useEffect, useState } from "react";


export default function OrgNavComp(){
    const[organizer,setOraganizer]=useState(null);
    useEffect(()=>{
        const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
        fetch("http://localhost:8080/getorname?login_id="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedCustomer",JSON.stringify(obj))
            setOraganizer(obj);
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
                            <Link to="/organizer_home" className="nav-link px-3"><HomeIcon color="success" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewartists" className="nav-link px-3">View Artists</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addevent" className="nav-link px-3">Add Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                    </ul>
                    <h5>welcome {organizer && organizer.company_name}</h5>

                </div>
            </nav>
            
       
    </div>
    

    )
    
}