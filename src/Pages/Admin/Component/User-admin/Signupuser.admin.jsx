import React from 'react';
import {firestore,createuserviaemailandpassword} from '../../firebase/firebase.utils';

class  Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      name : ''
    }
  }

  adddata = () =>  {
    // Add a new document with a generated id.\
    const {email,password,name} = this.state
    firestore.collection('users').add({
      email : email,
      name : name,
      password : password
    })
      .then(function (docRef) {
        createuserviaemailandpassword(email,password)
        alert("data berhasil ditambahkan")
      })
      .catch(function (error) {
        alert("error data")
      });
  }

  onEmailChange = (event)=>{
    this.setState({email : event.target.value})
  }

  onPasswordChange = (event)=>{
    this.setState({password : event.target.value})
  }

  onNameChange = (event)=>{
    this.setState({ name: event.target.value})
  }


  render(){
   
    return(
      <article className="br3 ba dark-gray b--black-10  w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
      
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div >
            <label className="db fw6 lh-copy f6 " >Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
              onChange={this.onNameChange}
            type="text" name="name"  id="name"/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6 " >Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
            onChange={this.onEmailChange}
             type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100" 
            onChange={this.onPasswordChange}
            type="password" name="password"  id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input onClick={()=>this.adddata()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
        </div>
    </main>
    </article>
  );
  }
} 

export default Register;