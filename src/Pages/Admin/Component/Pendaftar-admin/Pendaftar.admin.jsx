import React from 'react';
import Daftarpendaftar from './Daftarpendaftar.admin';
import {auth, firestore } from '../../firebase/firebase.utils';


class Pendaftar extends React.Component{
    constructor() {
        super();
    
        this.state = {
          nama: '',
          email : '',
          id : '',
          displayName : ''
        };
      }

    unsubscribeFromAuth = null;

    


    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
              const userRef = firestore.doc(`users/${userAuth.uid}`);
      
              userRef.onSnapshot(snapShot => {
                this.setState({
                  
                    id: snapShot.id,
                    ...snapShot.data()
                  
                });
      
                
              });
            }
      
            // this.setState({ currentUser: userAuth });
          });
    }

    

   

    render(){
        return(
            <div>
                <Daftarpendaftar/>
            </div>
            
        )
    
    }
}

export default Pendaftar;