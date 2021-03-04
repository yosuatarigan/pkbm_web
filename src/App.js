import React from 'react';
import './App.css';
import {auth} from './Pages/Admin/firebase/firebase.utils';
import Navigation from './components/Navigation/Navigation';
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
            <Route exact path='/' component={Home}/>
            <Route path='/alumni' component={Alumni}/>
            <Route path='/tutor' component={Tutor}/>
            <Route path='/info' component={Info}/>
            <Route path='/galeri' component={Galeri}/>
            <Route path='/article' component={Article}/>
            <Route path='/pendaftaran' component={Pendaftar}/>
            <Route path='/articlepage' render={()=>(<Articlepage title={this.state.articlep.title} desc={this.state.articlep.desc} coverurl={this.state.articlep.coverurl} /> )}/>
            


            <Route path='/admin'  render={() =>
              this.state.agree === this.state.currentUser.uid ? (
                <Sidebar handlesignoutuser={this.handlesignoutuser}/>
              ) : (
                <Login />
              )
            }/>
            <Route path='/fasilitas' component={Fasilitas}/>
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
} 

export default App;