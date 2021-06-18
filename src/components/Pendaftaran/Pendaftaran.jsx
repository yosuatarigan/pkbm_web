import React from 'react';
import jsPDF from 'jspdf';
import './pendaftaran.css';
import { adddata, adddatacustomid } from '../../Pages/Admin/firebase/firebase.utils';
import Field from './field';

const Register = () => {

    const dataaawal = {
        
        namalengkap: '',
        tempatdantanggallahir: '',
        nik: '',
        nisn: '',
        jeniskelamin: '',
        agama: '',
        alamat: '',
        kelurahan: '',
        kecamatan: '',
        kota: '',
        provinsi: '',
        kodepos: '',
        noijazah: '',
        noskhu: '',
        tahuntamat: '',
        rencanaprogram: '',
        email: '',
        nohppribadi: '',
        namaayah: '',
        tahunlahirayah: '',
        pekerjaanayah: '',
        pendidikanterakhirayah: '',
        nohpayah: '',
        namaibu: '',
        tahunlahiribu: '',
        pekerjaanibu: '',
        pendidikanterakhiribu: '',
        nohpibu: '',
        namawali: '',
        tahunlahirwali: '',
        pekerjaanwali: '',
        pendidikanterakhirwali: '',
        nohpwali: '',

    }

    const [datadaftar, setdatadaftar] = React.useState(dataaawal)


    const resetdata = () => {
        setdatadaftar(dataaawal)
    }

    const handleupload = async (e) => {
        // const storageRef = firebase.storage().ref(`images/${datadaftar.cover.name}`)
        // await storageRef.put(cover)
        // const data =  await storageRef.getDownloadURL()
        const tgldaftar = new Date();
        if (datadaftar.namalengkap &&
            datadaftar.tempatdantanggallahir &&
            datadaftar.nik &&
            datadaftar.jeniskelamin &&
            datadaftar.agama &&
            datadaftar.alamat &&
            datadaftar.kelurahan &&
            datadaftar.kecamatan &&
            datadaftar.provinsi &&
            datadaftar.rencanaprogram &&
            datadaftar.nohppribadi &&
            datadaftar.namaayah &&
            datadaftar.tahunlahirayah &&
            datadaftar.pekerjaanayah &&
            datadaftar.pendidikanterakhirayah &&
            datadaftar.nohpayah &&
            datadaftar.namaibu &&
            datadaftar.tahunlahiribu &&
            datadaftar.pekerjaanibu &&
            datadaftar.pendidikanterakhiribu &&
            datadaftar.nohpibu !== "") {
            adddatacustomid('pendaftar', datadaftar.nisn, { ...datadaftar, tgldaftar: tgldaftar })
            resetdata()
            alert('data sudah ditambah')
            pdfgenerator()


        }
        else {

            alert("data belum lengkap")
        }
    }


    const pdfgenerator = () => {
        var x = 40;
        const x2 = 60;
        const x3 = 180;
        const x4 = 250;
        var y = 20;
        const yi = 18;
        var doc = new jsPDF('p', 'pt');
        doc.setFontSize(14)
        doc.text(x3, y, 'Kementerian Pendidikan dan Kebudayaan')
        doc.text(x3 + 60, y = y + yi, 'PKBM Hanuba Medan')
        doc.text(x3 + 25, y = y + yi, 'Formulir Pendaftaran siswa baru')
        doc.text(x3 + 25, y = y + yi, 'TAHUN PELAJARAN 2020/2021')
     
        doc.text(x, y = y + yi + yi, 'I. CALON SISWA')
        doc.text(x2, y = y + yi, '1. Nama Lengkap')
        doc.text(x4, y, `   : ${datadaftar.namalengkap}`)

        doc.text(x2, y = y + yi, '2. Tempat/tgl lahir')
        doc.text(x4, y, `   :${datadaftar.tempatdantanggallahir}`)

        doc.text(x2, y = y + yi, '3. Nik')
        doc.text(x4, y, `   : ${datadaftar.nik}`)

        doc.text(x2, y = y + yi, '4. NISN')
        doc.text(x4, y, `   : ${datadaftar.nisn}`)

        doc.text(x2, y = y + yi, '5. Jenis Kelamin')
        doc.text(x4, y, `   : ${datadaftar.jeniskelamin}`)

        doc.text(x2, y = y + yi, '6. Agama')
        doc.text(x4, y, `   : ${datadaftar.agama}`)

        doc.text(x2, y = y + yi, '7. Alamat')
        doc.text(x4, y, `   : ${datadaftar.alamat}`)

        doc.text(x2, y = y + yi, '8. Kelurahan')
        doc.text(x4, y, `   : ${datadaftar.kelurahan}`)

        doc.text(x2, y = y + yi, '9. Kecamatan')
        doc.text(x4, y, `   : ${datadaftar.kecamatan}`)

        doc.text(x2, y = y + yi, '10.Kota')
        doc.text(x4, y, `   : ${datadaftar.kota}`)

        doc.text(x2, y = y + yi, '11.Provinsi')
        doc.text(x4, y, `   : ${datadaftar.provinsi}`)

        doc.text(x2, y = y + yi, '12.Kode Pos')
        doc.text(x4, y, `   : ${datadaftar.kodepos}`)

        doc.text(x2, y = y + yi, '13.Rencana Program')
        doc.text(x4, y, `   : ${datadaftar.rencanaprogram}`)

        doc.text(x2, y = y + yi, '14.Email')
        doc.text(x4, y, `   : ${datadaftar.email}`)

        doc.text(x2, y = y + yi, '15.No Hp')
        doc.text(x4, y, `   : ${datadaftar.nohppribadi}`)

        doc.text(x2, y = y + yi, '16.No Ijazah')
        doc.text(x4, y, `   : ${datadaftar.noijazah}`)

        doc.text(x2, y = y + yi, '17.No SKHU')
        doc.text(x4, y, `   : ${datadaftar.noskhu}`)

        doc.text(x2, y = y + yi, '18.Tahun Tamat')
        doc.text(x4, y, `   : ${datadaftar.tahuntamat}`)

        doc.text(x, y = y + yi + yi, 'II. Data Orang Tua')
        doc.text(x2, y = y + yi, '1. Nama Ayah')
        doc.text(x4, y, `   : ${datadaftar.namaayah}`)

        doc.text(x2, y = y + yi, '2. Tahun Lahir Ayah')
        doc.text(x4, y, `   : ${datadaftar.tahunlahirayah}`)

        doc.text(x2, y = y + yi, '3. Pekerjaan Ayah')
        doc.text(x4, y, `   : ${datadaftar.pekerjaanayah}`)

        doc.text(x2, y = y + yi, '4. Pendidikan Terakhir Ayah')
        doc.text(x4, y, `   : ${datadaftar.pendidikanterakhirayah}`)

        doc.text(x2, y = y + yi, '5. No. Hp Ayah')
        doc.text(x4, y, `   : ${datadaftar.nohpayah}`)

        doc.text(x2, y = y + yi, '6. Nama Ibu')
        doc.text(x4, y, `   : ${datadaftar.namaibu}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Ibu')
        doc.text(x4, y, `   : ${datadaftar.tahunlahiribu}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Ibu')
        doc.text(x4, y, `   : ${datadaftar.pekerjaanibu}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Ibu')
        doc.text(x4, y, `   : ${datadaftar.pendidikanterakhiribu}`)

        doc.text(x2, y = y + yi, '10. No. Hp Ibu')
        doc.text(x4, y, `   : ${datadaftar.nohpibu}`)

        doc.text(x, y = y + yi + yi, 'III. Wali')
        doc.text(x2, y = y + yi, '6. Nama Wali')
        doc.text(x4, y, `   : ${datadaftar.namawali}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Wali')
        doc.text(x4, y, `   : ${datadaftar.tahunlahirwali}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Wali')
        doc.text(x4, y, `   : ${datadaftar.pekerjaanwali}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Wali')
        doc.text(x4, y, `   : ${datadaftar.pendidikanterakhirwali}`)

        doc.text(x2, y = y + yi, '10. No. Hp Wali')
        doc.text(x4, y, `   : ${datadaftar.nohpwali}`)

        doc.save("pendaftar.pdf")


    }

    const handleChange = event => {
        const { value, name } = event.target;

        setdatadaftar({ ...datadaftar, [name]: value })
    };


    return (<div className="black bodypendaftaran">
        <article className=" pv5 br3 ba bg-white b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">

            <main className="pa4 black-80">

                < fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 blue fw6 ph0 mh0">Pendaftaran Siswa Baru</legend>
                    <legend className="f4 fw6 ph0 mh0">Data Pribadi</legend>
                   
                    <Field value={datadaftar.namalengkap} labelfield='Nama Lengkap' handlechange={handleChange} namefield='namalengkap' />
                    <Field value={datadaftar.tempatdantanggallahir} labelfield='Tempat/tgl lahir' handlechange={handleChange} namefield='tempatdantanggallahir' />
                    <Field value={datadaftar.nik} labelfield='NIK' handlechange={handleChange} namefield='nik' />
                    <Field value={datadaftar.nisn} labelfield='NISN' handlechange={handleChange} namefield='nisn' />
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Jenis Kelamin</label>
                        <select id="category" name="category" onChange={(e) => setdatadaftar({ ...datadaftar, jeniskelamin: e.target.value })}>
                            <option value={datadaftar.jeniskelamin}>...</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <Field value={datadaftar.agama} labelfield='Agama' handlechange={handleChange} namefield='agama' />
                    <Field value={datadaftar.alamat} labelfield='Alamat' handlechange={handleChange} namefield='alamat' />
                    <Field value={datadaftar.kelurahan} labelfield='Kelurahan' handlechange={handleChange} namefield='kelurahan' />
                    <Field value={datadaftar.kecamatan} labelfield='Kecamatan' handlechange={handleChange} namefield='kecamatan' />
                    <Field value={datadaftar.kota} labelfield='Kota' handlechange={handleChange} namefield='kota' />
                    <Field value={datadaftar.provinsi} labelfield='Provinsi' handlechange={handleChange} namefield='provinsi' />
                    <Field value={datadaftar.kodepos} labelfield='Kode Pos' handlechange={handleChange} namefield='kodepos' />

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 " >Rencana Program</label>
                        <select id="category" name="category" onChange={(e) => setdatadaftar({ ...datadaftar, rencanaprogram: e.target.value })}>
                            <option value={datadaftar.rencanaprogram}>...</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>

                    {
                        datadaftar.rencanaprogram === 'B' || datadaftar.rencanaprogram === 'C' ? <div>
                            <Field value={datadaftar.noijazah} labelfield='No Ijazah' handlechange={handleChange} namefield='noijazah' />
                            <Field value={datadaftar.noskhu} labelfield='No SKHU' handlechange={handleChange} namefield='noskhu' />
                            <Field value={datadaftar.tahuntamat} labelfield='Tahun Tamat' handlechange={handleChange} namefield='tahuntamat' />  </div>
                            : null
                    }


                    <Field value={datadaftar.email} labelfield='Email' handlechange={handleChange} namefield='email' />
                    <Field value={datadaftar.nohppribadi} labelfield='No Hp' handlechange={handleChange} namefield='nohppribadi' />

                    <legend className="f3 fw6 ph0 mh0">Data Orang tua</legend>
                    <Field value={datadaftar.namaayah} labelfield='Nama Ayah' handlechange={handleChange} namefield='namaayah' />
                    <Field value={datadaftar.tahunlahirayah} labelfield='Tahun Lahir' handlechange={handleChange} namefield='tahunlahirayah' />
                    <Field value={datadaftar.pekerjaanayah} labelfield='Pekerjaan' handlechange={handleChange} namefield='pekerjaanayah' />
                    <Field value={datadaftar.pendidikanterakhirayah} labelfield='Pendidikan Terakhir' handlechange={handleChange} namefield='pendidikanterakhirayah' />
                    <Field value={datadaftar.nohpayah} labelfield='No. HP' handlechange={handleChange} namefield='nohpayah' />
                    <Field value={datadaftar.namaibu} labelfield='Nama Ibu' handlechange={handleChange} namefield='namaibu' />
                    <Field value={datadaftar.tahunlahiribu} labelfield='Tahun Lahir' handlechange={handleChange} namefield='tahunlahiribu' />
                    <Field value={datadaftar.pekerjaanibu} labelfield='Pekerjaan' handlechange={handleChange} namefield='pekerjaanibu' />
                    <Field value={datadaftar.pendidikanterakhiribu} labelfield='Pendidikan Terakhir' handlechange={handleChange} namefield='pendidikanterakhiribu' />
                    <Field value={datadaftar.nohpibu} labelfield='No. Hp' handlechange={handleChange} namefield='nohpibu' />
                    <Field value={datadaftar.namawali} labelfield='Nama Wali' handlechange={handleChange} namefield='namawali' />
                    <Field value={datadaftar.tahunlahirwali} labelfield='Tahun Lahir' handlechange={handleChange} namefield='tahunlahirwali' />
                    <Field value={datadaftar.pekerjaanwali} labelfield='Pekerjaan Wali' handlechange={handleChange} namefield='pekerjaanwali' />
                    <Field value={datadaftar.pendidikanterakhirwali} labelfield='Pendidikan Terakhir' handlechange={handleChange} namefield='pendidikanterakhirwali' />
                    <Field value={datadaftar.nohpwali} labelfield='No. Hp' handlechange={handleChange} namefield='nohpwali' />
                </fieldset>
                <div className="">
                    <input onClick={handleupload} className="btn btn-primary" type="submit" value="Daftar" />
                </div>
            </main>
        </article>
    </div>)
}

export default Register;