import CustNavComp from "../Customer/CustNavComp";
import paymentimg from "../../static/images/payments.png";
import './PaymentComp.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Payment(){
    let navigate=useNavigate();
    const eventsolo = JSON.parse(localStorage.getItem("sevent"));
    const[set,setEve]=useState([]);
    useEffect(()=>{
      /*fetch(`http://localhost:8080/oneevent/${eventsolo}`)
      .then(resp=>resp.json())
      .then(e=>setEve(e))*/
  },[])
  console.log(set);

  const [quantity,setQuantity]=useState(1);


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
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Event</td>
      <td>{eventsolo.event_name}</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Time</td>
      <td>{eventsolo.starttime}</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Genre</td>
      <td>{eventsolo.genre_cat_id.category_name}</td>
      {/* <td>@fat</td> */}
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>venue</td>
      <td>{eventsolo.venue_id.venue_name}</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ticket quantity</td>
      <td><input type={"number"} name="qty" id="qty" onChange={(e) => setQuantity(e.target.valueAsNumber)}></input></td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Ticket price</td>
      <td>{eventsolo.price}</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      {/* <th></th> */}
      <td colSpan={2}><b>Total price</b></td>
      <td>{eventsolo.price *quantity} </td>
      {/* <td>@twitter</td> */}
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
    <button type="button" class="btn btn-danger" onClick={()=>{{navigate("/success")}}}>Payment</button>
</div>




</div>)
};