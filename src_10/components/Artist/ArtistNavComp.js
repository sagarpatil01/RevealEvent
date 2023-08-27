import { Link} from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";


export default function ArtistNavComp(){
    const[artist,setArtist]=useState(null);
    useEffect(()=>{
        const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
        fetch("http://localhost:8080/getarname?login_id="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("loggedCustomer",JSON.stringify(obj))
            setArtist(obj);
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
                            <Link to="/artist_home" className="nav-link px-3"><Avatar src="/broken-image.jpg" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view_requests" className="nav-link px-3">View Requests</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                       
                    </ul>
                    <h5>{artist && artist.first_name} {artist && artist.last_name}</h5>

                </div>
            </nav>
            
       
    </div>
    

    )
    
}