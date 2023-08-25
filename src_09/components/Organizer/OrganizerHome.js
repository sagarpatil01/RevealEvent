
import { useNavigate } from "react-router-dom";
import OrgNavComp from "./OrgNavComp";
import './OrganizerHome.css';


export default function OrganizerHome(){
    let navigate=useNavigate();
       
    return (
        
           <div className="org-home" >
                <OrgNavComp/>
                <div className="org-content">
                    <h2 color="white">Elevate Your Events with Seamless Scheduling"</h2>
                    <button type="button" class="btn btn-outline-primary org-btn" onClick={()=>{{navigate('/addevent')}}}>Schedule Event Now</button>
                </div>
            </div>

    )
    
}