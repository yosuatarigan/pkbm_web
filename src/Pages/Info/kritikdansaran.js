import React from 'react';
import {adddata} from '../Admin/firebase/firebase.utils';

const Kritik = ()=>{

  const [displayName, setdisplayName] = React.useState('');
  const [kritikdanpesan, setkritikdanpesan] = React.useState('');

  const onsend = async ()=>{
  await  adddata('transitkritikdanpesan',{displayName,kritikdanpesan})
  alert('data berhasil ditambahkan')
  }    

  return (
    <div className="tc pa4 black-80 black bg-lightest-blue">
        <div className='tc'> 
            <h3  className="blue b db mb2">Kritik dan Saran <span className="normal black-60"></span></h3>
             <label>Nama :</label> <input type='text' onChange={(e)=>setdisplayName(e.target.value)} />
             <br/>
               <textarea onChange={(e)=>setkritikdanpesan(e.target.value)} id="comment" name="comment" className="center db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" ></textarea>
            <input  onClick={onsend} className="btn btn-primary" href="#0" type="submit" value="Kirim"/ >
            
        </div>
    </div>
);
}

export default Kritik;