import React, { Component } from 'react';
import { FormErrors } from "../../../components/FormErrors"
import CoveringCard from "../../../shared/UIElements/CoveringCard"
import court from "../../../assets/Images/logL.PNG"
// import "./AdminLogin.css"
import axios from "axios"

class LoginLawyer extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordShown:' ',
      formErrors: {email: '', password: '',},
      
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passwordShown:false
    }
  }
  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
 
//form validation starts
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    
                   
                    
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid:this.state.emailValid && this.state.passwordValid});
  }
  
  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  //form validation ends
  authSubmithandler = async event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      const response = await axios.post(`http://localhost:2000/api/users/login`, data);
      alert(`Logged In Successfully as ${data.email}`);
      window.location = "http://localhost:3000/LawyerMod";
    } catch (error) {
      alert(error);
    }
  }


  render (props) {
    return (
        <div className="authentication">
      <form onSubmit={this.authSubmithandler} className="Form">
        <CoveringCard>
        <img className="res-image" src={court}/>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="passwordd" hide className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
          
           
       
        </div>
        
        <button type="submit" className="btn btn-primary" 
        disabled={!this.state.formValid }
      
       
       >
          Sign In</button>


          
        </CoveringCard>
        
      </form>
      
      </div>
    )
  }
}

export default LoginLawyer;