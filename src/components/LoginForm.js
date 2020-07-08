import React from 'react';
import '../styles/components/loginForm.scss'

export default class LoginForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleLoginData = this.handleLoginData.bind(this);
    }

    handleLoginData(e) {
      e.preventDefault();

      const email = e.target.elements.email.value
      const dob = e.target.elements.dob.value
      const password = e.target.elements.password.value

      e.target.elements.email.value = "";
      e.target.elements.dob.value = "";
      e.target.elements.password.value = "";

      this.props.submitLoginData(email,dob,password);
    }
  
    render() {    
      return (
        <div className='App'>
          <div className='logo' >
            <img src="https://contacts.zoho.com/file?ot=8&t=serviceorg&ID=62047589" alt='5paisa-logo' />
          </div>
          <div className='heading'>
            5 Paisa
          </div>
          <br />
          <div className='box'>
            <form onSubmit={this.handleLoginData}>
              <label>Email ID</label><br />
              <input className='input' type="text" placeholder="Enter email id" name="email" required />
              <br /><br />
              <label>Date of Birth</label><br />
              <input className='input' type="date" placeholder="Enter birth date" name="dob" />
              <br /><br />
              <label>Password</label><br />
              <input className='input' type="password" placeholder='Enter password' name="password"/>
              <br /><br />
              <button>Log in</button>
            </form>
          </div>
        </div>
      );
    }
}
