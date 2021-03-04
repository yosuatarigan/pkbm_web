import React from 'react';
import jsPDF from 'jspdf';
import './pendaftaran.css';
import   { adddata} from '../../Pages/Admin/firebase/firebase.utils';
import {Redirect} from 'react-router-dom'

const Register = () => {

    const [namalengkap, setnamalengkap] = React.useState("");
    const [tempatdantanggallahir, settempatdantanggallahir] = React.useState("");
    const [nik, setnik] = React.useState("");
    const [nisn, setnisn] = React.useState("");
    const [jeniskelamin, setjeniskelamin] = React.useState("");
    const [agama, setagama ] = React.useState("");
    const [alamat, setalamat] = React.useState("");
    const [kelurahan, setkelurahan] = React.useState("");
    const [kecamatan,setkecamatan ] = React.useState("");
    const [kota,setkota ] = React.useState("");
    const [provinsi,setprovinsi ] = React.useState("");
    const [kodepos,setkodepos ] = React.useState("");
    const [noijazah, setnoijazah ] = React.useState("");
    const [noskhu, setnoskhu] = React.useState("");
    const [tahuntamat, settahuntamat] = React.useState("");
    const [rencanaprogram, setrencanaprogram ] = React.useState("");
    const [email, setemail ] = React.useState("");
    const [nohppribadi, setnohppribadi] = React.useState("");
    const [namaayah, setnamaayah] = React.useState("");
    const [tahunlahirayah,settahunlahirayah ] = React.useState("");
    const [pekerjaanayah,setpekerjaanayah ] = React.useState("");
    const [pendidikanterakhirayah,setpendidikanterakhirayah ] = React.useState("");
    const [nohpayah,setnohpayah ] = React.useState("");
    const [namaibu,setnamaibu ] = React.useState("");
    const [tahunlahiribu, settahunlahiribu ] = React.useState("");
    const [pekerjaanibu,setpekerjaanibu  ] = React.useState("");
    const [pendidikanterakhiribu, setpendidikanterakhiribu ] = React.useState("");
    const [nohpibu,setnohpibu ] = React.useState("");
    const [namawali, setnamawali ] = React.useState("");
    const [tahunlahirwali, settahunlahirwali ] = React.useState("");
    const [pekerjaanwali, setpekerjaanwali ] = React.useState("");
    const [pendidikanterakhirwali, setpendidikanterakhirwali ] = React.useState("");
    const [nohpwali, setnohpwali ] = React.useState("");



  
    const handleupload =async (e)=>{
        // const storageRef = firebase.storage().ref(`images/${cover.name}`)
        // await storageRef.put(cover)
        // const data =  await storageRef.getDownloadURL()
        const tgldaftar = new Date();
        if(namalengkap && tempatdantanggallahir && nik && jeniskelamin&&agama&&alamat&&kelurahan&&kecamatan&&provinsi&&rencanaprogram&&nohppribadi&&namaayah&&tahunlahirayah&&pekerjaanayah&&pendidikanterakhirayah&&nohpayah&&namaibu&&tahunlahiribu&&pekerjaanibu&&pendidikanterakhiribu&&nohpibu&&namawali&&tahunlahirwali&&pekerjaanwali&&pendidikanterakhirwali && nohpwali !== ""){
            adddata('pendaftar',{namalengkap,tempatdantanggallahir,nik,nisn,jeniskelamin,agama,alamat,kelurahan,kecamatan,kota,provinsi,kodepos,noijazah,noskhu,tahuntamat,rencanaprogram,email,nohppribadi,namaayah,tahunlahirayah,pekerjaanayah,pendidikanterakhirayah,nohpayah,namaibu,tahunlahiribu,pekerjaanibu,pendidikanterakhiribu,nohpibu,namawali,tahunlahirwali,pekerjaanwali,pendidikanterakhirwali,nohpwali,tgldaftar})
            alert('data sudah ditambah')
            pdfgenerator()
            
            
         }
         else{
            
            alert("data belum lengkap")
         }
        }

       const pdfgenerator = ()=>{

            var doc = new jsPDF('p','pt');
    
            doc.text(20,70,`Nama Lengkap            `)   
            doc.text(150,70, `   : ${namalengkap}`)
            doc.text(20,90,`Tempat/tgl lahir        `)   
            doc.text(150,90, `   :${tempatdantanggallahir}`)
            doc.text(20,110,`NIK                    `)   
            doc.text(150,110, `    : ${nik}`)
            doc.text(20,130,`NISN                   `)   
            doc.text(150,130, `    : ${nisn}`)
            doc.text(20,150,`Jenis Kelamin          `)   
            doc.text(150,150, `   : ${jeniskelamin}`)
            doc.text(20,170,`Agama                  `)   
            doc.text(150,170, `   : ${agama}`)
            doc.text(20,190,`Alamat                 `)   
            doc.text(150,190, `   : ${alamat}`)
            doc.text(20,210,`Kelurahan              `)   
            doc.text(150,210, `   : ${kelurahan}`)
            doc.text(20,230,`Kecamatan              `)   
            doc.text(150,230, `   : ${kecamatan}`)
            doc.text(20,250,`Kota                   `)   
            doc.text(150,250, `   : ${kota}`)
            doc.text(20,270,`Provinsi               `)   
            doc.text(150,270, `   : ${provinsi}`)
            doc.text(20,290,`Kode Pos               `)   
            doc.text(150,290, `   : ${kodepos}`)
            doc.text(20,310,`No Ijazah              `)   
            doc.text(150,310, `   : ${noijazah}`)
            doc.text(20,330,`No SKHU                `)   
            doc.text(150,330, `   : ${noskhu}`)
            doc.text(20,350,`Tahun Tamat            `)   
            doc.text(150,350, `   : ${tahuntamat}`)
            doc.text(20,370,`Rencana Program        `)   
            doc.text(150,370, `   : ${rencanaprogram}`)
            doc.text(20,390,`Email                  `)   
            doc.text(150,390, `   : ${email}`)
            doc.text(20,410,`No HP                  `)   
            doc.text(150,410, `   : ${nohppribadi}`)
            doc.text(20,430,`Nama Ayah              `)   
            doc.text(150,430, `   : ${namaayah}`)
            doc.text(20,450,`Tahun Lahir            `)   
            doc.text(150,450, `   : ${tahunlahirayah}`)
            doc.text(20,470,`Pekerjaan    `)   
            doc.text(150,470, `   : ${pekerjaanayah}`)
            doc.text(20,490,`Pendidikan Terakhir    `)   
            doc.text(150,490, `   : ${pendidikanterakhirayah}`)
            doc.text(20,510,` No Hp                 `)   
            doc.text(150,510, `   : ${nohpayah}`)
            doc.text(20,530,`Nama Ibu               `)   
            doc.text(150,530, `   : ${namaibu}`)
            doc.text(20,550,`Tahun Lahir            `)   
            doc.text(150,550, `   : ${tahunlahiribu}`)
            doc.text(20,570,`Pekerjaan    `)   
            doc.text(150,570, `   : ${pekerjaanibu}`)
            doc.text(20,590,`Pendidikan Terakhir    `)   
            doc.text(150,590, `   : ${pendidikanterakhiribu}`)
            doc.text(20,610,` No Hp                 `)   
            doc.text(150,610, `   : ${nohpibu}`)
            doc.text(20,630,`Nama Wali              `)   
            doc.text(150,630, `   : ${namawali}`)
            doc.text(20,650,`Tahun Lahir            `)   
            doc.text(150,650, `   : ${tahunlahirwali}`)
            doc.text(20,670,`Pekerjaan    `)   
            doc.text(150,670, `   : ${pekerjaanwali}`)
            doc.text(20,690,`Pendidikan Terakhir    `)   
            doc.text(150,690, `   : ${pendidikanterakhirwali}`)
            doc.text(20,710,` No Hp                 `)   
            doc.text(150,710, `   : ${nohpwali}`)




            doc.save("pendaftar.pdf")
        }

    


    return (<div className="black bodypendaftaran">
        <article className=" pv5 br3 ba bg-white b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">
           
            <main className="pa4 black-80">

                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 blue fw6 ph0 mh0">Pendaftaran Siswa Baru</legend>
                    <legend className="f4 fw6 ph0 mh0">Data Pribadi</legend>
                    <div >
                        <label className="db fw6 lh-copy f6 " >Nama Lengkap</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnamalengkap(e.target.value)}
                            type="text" name="nama" id="nama" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Tempat/tgl lahir</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>settempatdantanggallahir(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >NIK</label>
                        <input className="pa1 input-reset required ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnik(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >NISN</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnisn(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Jenis Kelamin</label>
                        <select id="category" name="category" onChange={(e)=>setjeniskelamin(e.target.value)}>
                        <option value="">...</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Agama</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setagama(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Alamat</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setalamat(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kelurahan</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkelurahan(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kecamatan</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkecamatan(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kota</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkota(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Provinsi</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setprovinsi(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Kode Pos</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setkodepos(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                   
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Rencana Program</label>
                        <select id="category" name="category" onChange={(e)=>setrencanaprogram(e.target.value)}>
                        <option value="">...</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>

                  {
                      rencanaprogram === 'B' || rencanaprogram==='C'   ? <div><div className="mt3">
                      <label className="db fw6 lh-copy f6 " >No Ijazah</label>
                      <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                          onChange={(e)=>setnoijazah(e.target.value)}
                          type="text-" name="bidang" id="bidang" />
                  </div>
                  <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >No SKHU</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setnoskhu(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Tahun tamat</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>settahuntamat(e.target.value)}
                            type="text-" name="bidang" id="bidang" />
                    </div></div>
                      : null
                  }

                     
                   
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Email</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={(e)=>setemail(e.target.value)}
                            type="email" name="bidang" id="bidang" />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No Hp</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohppribadi(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <legend className="f3 fw6 ph0 mh0">Data Orang tua</legend>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Ayah</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamaayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun Lahir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahirayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhirayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                     <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpayah(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Ibu</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamaibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun lahir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahiribu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhiribu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpibu(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                   
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Nama Wali</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnamawali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Tahun lahir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>settahunlahirwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pekerjaan</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpekerjaanwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Pendidikan terakhir</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setpendidikanterakhirwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">No. Hp</label>
                        <input className=" pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                             onChange={(e)=>setnohpwali(e.target.value)}
                            type="text" name="cover" id="cover" />
                    </div>

                    

                </fieldset>
                <div className="">
                    <input  onClick={handleupload} className="btn btn-primary" type="submit" value="Daftar" />
                </div>
            </main>
        </article>
        </div>)
}

export default Register;