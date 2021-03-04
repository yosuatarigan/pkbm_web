import React from 'react';
import './Alumni.css';
import firebase, {adddata, firestore} from '../Admin/firebase/firebase.utils';
import Searchbox from '../../components/Search/search.component';
import Cardlist from './Cardlistalumni';

const dataawal = {nama :'',pekerjaan : '',tahun : ''}

const Alumni= ()=>{
  const [data, setdata] = React.useState([]);
  const [cover, setcover] = React.useState([]);
  const [searchfield, setsearchfield] = React.useState('');
  const [dataalumni, setdataalumni] = React.useState(dataawal)

  const onsubmitalumni =async (e)=>{
    const storageRef = firebase.storage().ref(`images/${cover.name}`)
    await storageRef.put(cover)
    const data =  await storageRef.getDownloadURL()
   adddata('transitalumni',{...dataalumni,coverurl : data})
   resetdata()
   alert('data berhasil ditambahkan')
}

React.useEffect(() => {
  firestore.collection('alumni')
  .onSnapshot((snapshot)=>{
    const data = snapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
    }))
    setdata(data)
  })
}, [])

const onchangesearch = (e)=>{
    setsearchfield(e.target.value)
}

const resetdata = ()=>{
    setdataalumni(dataawal)
}



const filteredAlumni = data.filter(alumni => {
    return alumni.nama.toLowerCase().includes(searchfield.toLowerCase());
})

console.log(searchfield)
  return (
      <div className='bg-black'>
    <div className='tc pv5  bodyalumni'>
        {/* <p className="f2 bold blue">ALUMNI YAYASAN PKBM HANUBA</p> */}

        <article className="bg-washed-blue br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <h3 className="blue ph0 mh0">ALUMNI</h3>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6 " >Nama</label>
                        <input onChange={(e)=>setdataalumni({...dataalumni, nama: e.target.value})} className="pa1 input-reset ba bg-transparent   w-100"

                            type="text" name="nama" id="nama" value={dataalumni.nama} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Pekerjaan</label>
                        <input onChange={(e)=>setdataalumni({...dataalumni, pekerjaan: e.target.value})}className="pa1 input-reset ba bg-transparent  w-100"

                            type="text" name="pekerjaan" id="pekerjaan" value={dataalumni.pekerjaan}  />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Tahun Ajaran</label>
                        <input onChange={(e)=>setdataalumni({...dataalumni, tahun: e.target.value})} className="b pa1 input-reset ba bg-transparent   w-100"

                            type="text" name="tahunajaran" id="tahunajaran" value={dataalumni.tahun}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6">Foto</label>
                        <input onChange={(e)=>setcover(e.target.files[0])} className="b pa1 input-reset ba bg-transparent   w-100"

                            type="file" name="tahunajaran" id="foto" />
                    </div>
                </fieldset>
                <div className="">
                    <input onClick={ onsubmitalumni} className="btn btn-primary" type="submit" value="Register" />
                </div>
            </main>
        </article>
        {<Searchbox onchangesearch={onchangesearch}/>}
        

       {<Cardlist data={filteredAlumni}/>}

    </div>
    </div>
);
}

export default Alumni;