import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import SignInAdmin from './Component/SignIn/SignInAdmin.component';
import Sidebar from './Component/Sidebar-admin/sidebar.admin';

class Admin extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  render(){
    return(
      <Sidebar/>
    )
}



}

export default Admin;
