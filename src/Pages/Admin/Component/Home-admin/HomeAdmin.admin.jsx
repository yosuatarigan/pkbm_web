import React from 'react';
import {auth, firestore } from '../../firebase/firebase.utils';
import Daftaraktivitas from './daftaraktivitas.admin';


class Homeadmin extends React.Component{
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
                <Daftaraktivitas/>
            </div>
            
        )
    
    }
}

export default Homeadmin;