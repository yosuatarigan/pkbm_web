import React from 'react';
import {firestore} from '../../firebase/firebase.utils';

class Tambahuser extends  React.Component {
    constructor() {
        super()
        this.state = {
          tentor: [],
          nama: '',
          email: ''
        }
      }

      adduser = ()=>{
          // Add a new document with a generated id.
firestore.collection("users").add({
    displayName: this.state.nama,
    email : this.state.email
})
.then(function(docRef) {
    alert("Menambahkan data berhasil")
})
.catch(function(error) {
    alert("error data")
});
      }

    onNameChange = (event) => {
        this.setState({ nama: event.target.value })
      }
    
      onEmailChange = (event) => {
        this.setState({ email: event.target.value })
      }

    render(){
        return(
            <div>
            <article className="bg-light-green br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">

                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Tambah user</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 " >Nama</label>
                            <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent   w-100"

                                type="text" name="nama" id="name" />
                        </div>

                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">email</label>
                            <input onChange={this.onEmailChange} className="b pa2 input-reset ba bg-transparent   w-100"

                                type="text" name="tahunajaran" id="password" />
                        </div>


                    </fieldset>
                    <div className="">
                        <input onClick={()=>this.adduser()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </main>
            </article>
        </div>
        )
    }

    }



export default Tambahuser;