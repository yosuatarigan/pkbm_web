import React from 'react';
import  firebase, { adddata} from '../../firebase/firebase.utils';

const Register = () => {

    const [nama, setnama] = React.useState("");
    const [bidang, setbidang] = React.useState("");
    const [cover, setcover] = React.useState("dd");

  
    const handleupload =async (e)=>{
        const storageRef = firebase.storage().ref(`images/${cover.name}`)
        await storageRef.put(cover)
        const data =  await storageRef.getDownloadURL()
       adddata('tutor',{nama,bidang,coverurl : data})
       alert("data berhasil ditambahkan")
    }


    return (
        <article className="br3 ba dark-gray b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Form Tutor</legend>
                    <div >
                        <label className="db fw6 lh-copy f6 " >Nama</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnama(e.target.value)}
                            type="text" name="nama" id="nama" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Bidang</label>
                        <textarea className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setbidang(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Foto</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setcover(e.target.files[0])}
                            type="file" name="cover" id="cover" />
                    </div>
                </fieldset>
                <div className="">
                    <input  onClick={handleupload} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
            </main>
        </article>)
}

export default Register;