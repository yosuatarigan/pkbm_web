import React from 'react';
import { signinviaemailandpassword } from '../Admin/firebase/firebase.utils';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginEmail: '',
      LoginPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ LoginEmail: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ LoginPassword: event.target.value })
  }


  onButtonSubmit = ()=>{
   signinviaemailandpassword(this.state.LoginEmail,this.state.LoginPassword)
  }


  render() {
    
    return (
      <article className="br3 pv3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <h3 className="blue fw6 ph0 mh0">Login </h3>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 " >Email</label>
              <input className="pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                htmlFor="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input className="b pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                htmlFor="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input onClick={() => this.onButtonSubmit()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Masuk" />
           </div>
          <div className="lh-copy mt3">
            
          </div>
        </main>
      </article>
    );
  }

}

export default Login;