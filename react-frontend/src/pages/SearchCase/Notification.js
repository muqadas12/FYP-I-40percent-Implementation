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
 selectedFile: null,
  emailname:{
    ahmadali:false,
    muqaddasshaaaban:false
  }
  

}


this.handleChange=this.handleChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleCheckbox(e){
    this.setState({checkbox: e.target.checked})
  }
//   onFileChange(e) {
//     this.setState({ attachment: e.target.files[0] });
// }
  chkClick(e){
    var{name,checked}=e.target;
    this.setState=((e)=>{
      var Selectedname=e.emailname;
      return Selectedname[name]=checked;
    })
  
  }




  async handleSubmit(e){
    alert("Your email have been sent!")
    e.preventDefault()
    const{name,email,message,to,attachment}=this.state
    const form=await axios.post("http://localhost:2000/api/mail",{
      name,
      email,
      to,
      message,
      attachment
     
      
    })
    // alert("Your email have been sent!")
    
  }

 

render(){
  var displayemail=Object.keys(this.state.emailname).filter((x)=>this.state.emailname[x])
return(
  <div>
     <img className="responsive-image" src={notify} />
     <br/>
    <input type="checkbox" name="muqaddasshaaaban" onChange={this.chkClick}/>muqaddasshaaaban@gmail.com
    <input type="checkbox" name="ahmadali" onChange={this.chkClick}/>ahmadali280298@gmail@gmail.com

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
        {/* <Input type="text"  onChange={this.handleCheckbox}/> */}

        <Input type="to" 
        name="to" 
        onChange={this.handleChange}
       
        >{displayemail}</Input>
        
      </FormGroup>
      
      <FormGroup className="form-not">
        <Label for="message">Message:</Label>
        <Input type="textarea" 
        name="message" 
        onChange={this.handleChange}
       
        />
      </FormGroup>


      {/* <FormGroup className="form-not">
        <Label for="attachment">attachment:</Label>
        <Input type="file" 
        name="attachment" 
        onChange={this.handleChange}
       
        />
      </FormGroup> */}
      <Button  className="form-not">Submit</Button>

  </Form>
  </div>

  )

}
}
export default Notification;






