import React from 'react';
import './App.css';
import {auth} from './Pages/Admin/firebase/firebase.utils';
import Navigation from './components/Navigation/Navigation2';
import Info from './Pages/Info/Info';
import Footer from './Pages/Footer/Footer';
import Alumni from './Pages/Alumni/Alumni';
import Tutor from './Pages/Tutor/Tutor';
import Fasilitas from './Pages/Fasilitas/Fasilitas';
import Login from './Pages/Admin/Login';
import { Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'tachyons';
import Sidebar from './Pages/Admin/Component/Sidebar-admin/sidebar.admin';
import Galeri from './components/Galeri/Galeri';
import Pendaftar from './components/Pendaftaran/Pendaftaran';
import Article from './components/Article/Article';
import Articlepage from './components/Article/Articlepage';


class App extends  React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: false,
      agree : false,
      handlenavsbug : false,
      articlep : {
        title : '',
        coverurl : '',
        desc : ''
      }
    };
  }

  handleswitcharticlepage = (title,desc,coverurl)=>{
    this.setState({
      articlep : {
        title ,
        desc, coverurl
      }
    })
  }

  handlesignoutuser = ()=>{
    
    this.setState({agree : "none"})
  }

  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        this.setState({currentUser : {
          displayName : userAuth.displayName,
          email : userAuth.email,
          uid : userAuth.uid
        }})
      this.setState({agree : userAuth.uid})  
      console.log(this.state.currentUser)
      }
    });
  }

  Articlepages = ()=>{
    return 
  }

  render(){
    return(
      <div>
        <Navigation/> 
        <div>
          <Switch>
            <Route exact path='/pkbm-hanuba3/' component={Home}/>
            <Route path='/pkbm-hanuba3/alumni' component={Alumni}/>
            <Route path='/pkbm-hanuba3/tutor' component={Tutor}/>
            <Route path='/pkbm-hanuba3/info' component={Info}/>
            <Route path='/pkbm-hanuba3/galeri' component={Galeri}/>
            <Route path='/pkbm-hanuba3/article' component={Article}/>
            <Route path='/pkbm-hanuba3/pendaftaran' component={Pendaftar}/>
            <Route path='/pkbm-hanuba3/articlepage' render={()=>(<Articlepage title={this.state.articlep.title} desc={this.state.articlep.desc} coverurl={this.state.articlep.coverurl} /> )}/>
            


            <Route path='/pkbm-hanuba3/admin'  render={() =>
              this.state.agree === this.state.currentUser.uid ? (
                <Sidebar handlesignoutuser={this.handlesignoutuser}/>
              ) : (
                <Login />
              )
            }/>
            <Route path='/pkbm-hanuba3/fasilitas' component={Fasilitas}/>
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
} 

export default App;