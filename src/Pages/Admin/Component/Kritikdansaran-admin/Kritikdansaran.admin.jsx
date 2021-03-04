import React from 'react';
// import Card from './Card';
// import Navuser from './Navuser';
// import Tambahuser from './tambahuser';
import Daftarkritikdanpesan from './Daftarkritikdanpesan.admin';
import Daftartransitkritikdanpesan from './Daftartransitkritikdanpesan.admin';
import {auth, firestore } from '../../firebase/firebase.utils';


class Kritikdanpesan extends React.Component{
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

    

    //  componentDidMount(){
    //     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //         if (userAuth) {
    //           const userRef = firestore.doc(`users/${userAuth.uid}`);
            
    //           firestore.collection("users").get().then((querySnapshot)=>{
    //             querySnapshot.forEach((doc)=>{
    //                 console.log(doc.id, "=>", doc.data())
    //             })
    //         })


    //           userRef.onSnapshot(snapShot => {
    //             this.setState({
                  
    //                 id: snapShot.id,
    //                 ...snapShot.data()
                  
    //             });
      
    //             console.log(this.state);
    //           });
    //         }
      
    //         // this.setState({ currentUser: userAuth });
    //       });
    // }


    render(){
        return(
            <div>
              <Daftartransitkritikdanpesan/>
                <Daftarkritikdanpesan/>

            </div>
            
        )
    
    }
}

export default Kritikdanpesan;