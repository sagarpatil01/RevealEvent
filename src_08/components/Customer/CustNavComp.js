import { Link} from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';


export default function CustNavComp(){
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
                            <Link to="/categories" className="nav-link px-3">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                    </ul>
                    <h3>Welcome User</h3>

                </div>
            </nav>
            
       
    </div>
    

    )
    
}