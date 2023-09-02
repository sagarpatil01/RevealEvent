import CustNavComp from "../Customer/CustNavComp";
import paymentimg from "../../static/images/payments.png";
import './PaymentComp.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Payment(){
    let navigate=useNavigate();
    const eventsolo = JSON.parse(localStorage.getItem("sevent"));
    const loggedCustomer=JSON.parse(localStorage.getItem("loggedCustomer")).id;
    const[set,setEve]=useState([]);
    useEffect(()=>{
      /*fetch(`http://localhost:8080/oneevent/${eventsolo}`)
      .then(resp=>resp.json())
      .then(e=>setEve(e))*/
  },[])
  console.log(set);
  console.log(loggedCustomer,eventsolo.id);

  const [quantity,setQuantity]=useState(1);

  const url="http://localhost:8080/insertticketbooking"
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions={
        method:'POST',
        headers:{'content-type':'application/json'}, 
        body:JSON.stringify({quantity:quantity,
                           total_amount:eventsolo.price *quantity,
                           payment_method:"Online",
                           payment_status:"Pending",
                           eid:eventsolo.id,
                           cid:loggedCustomer})
                           
    }
     fetch(url,reqOptions)
    .then(resp => {if(resp.ok)
                      return resp.text();
                    else
                      throw new Error("Server error");
                   })
    .then(text => text.length ? JSON.parse(text):{})
    .then(obj=>console.log(obj))

    navigate("/success");
                }

                console.log(quantity)

   return( 
   <div>
     {/* <p> {JSON.stringify(eventsolo)}</p> */}
    <CustNavComp/>
    <form className="payment-form">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Event</td>
      <td>{eventsolo.event_name}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Date</td>
      <td>{eventsolo.event_date}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Time</td>
      <td>{eventsolo.starttime}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Genre</td>
      <td>{eventsolo.genre_cat_id.category_name}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>venue</td>
      <td>{eventsolo.venue_id.venue_name}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Ticket quantity</td>
      <td><input type={"number"} name="qty" id="qty" onChange={(e) => setQuantity(e.target.valueAsNumber)}></input></td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Ticket price</td>
      <td>{eventsolo.price}</td>
    </tr>
    <tr>
      <td colSpan={2}><b>Total price</b></td>
      <td>{eventsolo.price *quantity} </td>
    </tr>
    {/* <tr>
     <td colSpan={3}><button >Payment</button></td>
    </tr> */}
  </tbody>
</table>
</form>
<div className="payment-icon">
    <b >Select payment method :</b>
    <img src={paymentimg} href="#"></img>
    <br/>
    <br/>
    <button type="button" class="btn btn-danger" onClick={(e)=>{sendData(e)}}>Payment</button>
    
</div>




</div>)
};