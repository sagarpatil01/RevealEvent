import { Link } from "react-router-dom";

export default function AdminNAv(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/logininfo" className="nav-link px-3">Registered Users</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/viewArtists" className="nav-link px-3">View Artists</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/vieworganizer" className="nav-link px-3">View Organizer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewcustomer" className="nav-link px-3">View customer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewevents" className="nav-link px-3">View Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                    </ul>
                    <h3>Welcome Admin</h3>

                </div>
            </nav>
        
       
    </div>

    )
    
}