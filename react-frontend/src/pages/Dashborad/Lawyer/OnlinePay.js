// import React,{useState} from "react";
// import "./OnlinePay.css"
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css"
// const OnlinePay=()=>{
//     const [number,setnumber]=useState('');
//     const [name,setname]=useState('');
//     const [expiry,setexpiry]=useState('');
//     const [cvc,setCvc]=useState('');
//     const [focus,setFocus]=useState('');

//     return(
//         <div>
//             <Cards
//             number={number}
//             name={name}
//             expiry={expiry}
//             cvc={cvc}
//             focused={focus}
//             />
            



            
            
//            <form>
//                <input type="tel" name="number" placeholder="Card number" value={number} 
//                onChange={e=>setnumber(e.target.value)}
//                onFocus={e=>setFocus(e.target.name)}


//                />
//                <input type="texxt" name="name" placeholder="Name" value={name} 
//                onChange={e=>setname(e.target.value)}
//                onFocus={e=>setFocus(e.target.name)}
//                />
//              <input type="texxt" name="expiry" placeholder="MM/YY Expiry" value={expiry} 
//                onChange={e=>setexpiry(e.target.value)}
//                onFocus={e=>setFocus(e.target.name)}
//                />
//             <input type="tel" name="cvc" placeholder="CVC" 
//                value={cvc} 
//                onChange={e=>setCvc(e.target.value)}
//                onFocus={e=>setFocus(e.target.name)}
//                />
               

              
//                </form>
//             </div>

//     )

// }
// export default OnlinePay;



import React from "react"
import StripeCheckout from "react-stripe-checkout"
import {toast} from "react-toastify"
import axios from "axios"
toast.configure();
const OnlinePay=()=>{
    const[product]=React.useState({
        name:'case pay',
        price:6499.89
    })
    toast.configure();
    async function handleToken(token,address){
       
        const response= await axios.post("http://localhost:2000/checkout",{
            token,
            product
        });
        const {status}= response.data
        if(status==='sucess'){
            toast("success check email for details",{type:'success'})
        }
        else{
            toast("something went wrong",{type:'error'})
        }


    }
    return(
        <div>
          
            
            <StripeCheckout 
            stripeKey="pk_test_51I7iePJ9U6iFySQk6ZLacLxu1gVmtqdvfMXDqf7egI5JMCZMkqQp6n96UuCsYpH8MkeSIHXNgzXprf3yTyK8pTXB00NNY5bRCE"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}

            />

        </div>
    )
}
export default OnlinePay; 