
import SlideShow from './SlideShow';
import CardComp from './CardComp';
import './HomeComp.css';
import { Button } from '@mui/material';
import Footer from '../Footer/FooterComp';
import LoginComp from '../Login/LoginComp';

export default function HomeComp(){

    return (
        <div className='home-style'>
       
     <div className='home-content'>
     <h1>Welcome to <span className='home-span'>RevealEvent</span></h1>
    
     </div>
     <h4 className='home-desc'>An event management system optimizes planning, coordination, and execution of events through a digital platform.</h4>
     <a href="/login" class="home-btn scrollto">Get Started</a>
     <div>
        <CardComp/>
     </div>
     <div>
        {/* <SlideShow/> */}
     </div>
        
     </div>
     
    
    )
    

}


       
