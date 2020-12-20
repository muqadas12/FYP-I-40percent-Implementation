import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"

import "./Notification.css"
import notify from "../../assets/Images/noti.jpg";
class Notification extends Component{
  constructor(){
    super();
  
this.state={
  name:"",
  email:"",
  to:"",
  message:"",
  

}
this.handleChange=this.handleChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  async handleSubmit(e){
    alert("Your email have been sent!")
    e.preventDefault()
    const{name,email,message,to}=this.state
    const form=await axios.post("http://localhost:2000/api/mail",{
      name,
      email,
      to,
      message,
     
      
    })
    // alert("Your email have been sent!")
    
  }

 

render(){
return(
  <div>
     <img className="responsive-image" src={notify} />
     <br/>
     <h3 className="h-send-notice">Send Notification:</h3>
     <br/>
<Form className="form-not" onSubmit={this.handleSubmit} style={{width:'600px'}}>
<FormGroup className="form-not">
        <Label className="l-notify-name" for="name">Name:</Label>
        <Input type="textt" 
        name="name" 
        onChange={this.handleChange}
       
        />
      </FormGroup>
      <FormGroup className="form-not">
        <Label for="email">Email:</Label>
        <Input type="email" 
        name="email" 
        onChange={this.handleChange}
       
        />
        
      </FormGroup>
      <FormGroup className="form-not">
        <Label for="email">To:</Label>
        <Input type="to" 
        name="to" 
        onChange={this.handleChange}
       
        />
        
      </FormGroup>
      
      <FormGroup className="form-not">
        <Label for="message">Message:</Label>
        <Input type="textarea" 
        name="message" 
        onChange={this.handleChange}
       
        />
      </FormGroup>
      <Button  className="form-not">Submit</Button>

  </Form>
  </div>

  )

}
}
export default Notification;