import React from 'react';
import firebase, { adddata, firestore } from '../../firebase/firebase.utils';

const Verifikasiadmin = () => {
    const [data, setdata] = React.useState([]);
    const [ni, setni] = React.useState("");
    const handleclick = async (e) => {

        alert('Nama : Elia \r\nNISN: 12356 \r\nTahun :2020/2021 \r\nData Terverifikasi')
    }

    // React.useEffect(() => {
    //     firestore.collection('siswa')
    //         .onSnapshot((snapshot) => {
    //             const data = snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data()
    //             }))
    //             setdata(data)
    //         })
    // }, [])







    return (<article className="br3 ba dark-gray b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">

            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Verifikasi Pendaftaran</legend>
                <div >
                    <label className="db fw6 lh-copy f6 " ></label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                        onChange={(e) => setni(e.target.value)}
                        type="text" name="title" id="title" />
                </div>


            </fieldset>
            <div className="">
                <input onClick={handleclick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Periksa" />
            </div>
        </main>
    </article>)
}

export default Verifikasiadmin;