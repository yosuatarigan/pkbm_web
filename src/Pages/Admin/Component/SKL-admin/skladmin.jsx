import React from 'react';
import firebase, { adddata, firestore } from '../../firebase/firebase.utils';
import jsPDF from 'jspdf';
var hash = require('hash.js')


const _p = 11;
const _q = 13;
var _tn;
var _n;
var _e;
var _d;
var _c = [];
var _m = [];

const getkey = () => {
    _n = _p * _q;
    _tn = (_p - 1) * (_q - 1);
    _e = 17;

    // nilai d ditentukan dengan rumus (d x e) mod totien = 1
    // nilai d dicoba satu per satu mulai dari 2, 3, 4, dst sehingga rumus tersebut terpenuhi
    for (_d = 2; _d < 1000; _d++) {
        if ((_d * _e) % _tn == 1) {
            _d = _d;

            break;
        }
    }
}

const enkrip = (pesan) => {
    _c = [];
    // _c = pesan.map((angka) => angka.modPow(_e, _n));
    //  _c= pesan.modPow(_e, _n);

    for (var i = 0; i < pesan.length; i++) {
        _c.add(pesan[i].modPow(_e, _n));
    }
}

const dekrip = (ciper) => {
    _m = [];
    // _m = pow(ciper, _d) % _n;
    // _m = ciper.map((angka) => angka.modPow(_d, _n));
    // _m = ciper.modPow(_d, _n);
    for (var i = 0; i < ciper.length; i++) {
        _m.add(ciper[i].modPow(_d, _n));
    }
}

const Skladmin = () => {
    const [data, setdata] = React.useState("ini data lama");
    const [ni, setni] = React.useState("");
    const handleclick = async (e) => {
        firestore.collection('siswa').doc(`${ni}`)
            .get().then((doc) => {
                // if (doc.exists) {
                //     // console.log("Document data:", doc.data());

                //     // const datanya = { id: doc.id, ...doc.data() };
                //     // console.log(datanya);
                //     // const fetch = async () => await setdata(datanya);
                //     // fetch();
                //     console.log(doc.id);

                // } else {
                //     // doc.data() will be undefined in this case
                //     console.log("No such document!");
                // }
                // console.log(doc.id);
                setdata({ id: doc.id, ...doc.data() });
            })
        pdfgenerator();


    }

    var di = hash.sha256().update('abc').digest('hex');

    console.log(di);

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


    console.log(`ini data ${data.id}`);
    console.log(`ini data ${data.namalengkap}`);


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
        doc.text(x4, y, `   : ${data.namalengkap}`)

        doc.text(x2, y = y + yi, '2. Tempat/tgl lahir')
        doc.text(x4, y, `   :${data.tempatdantanggallahir}`)

        doc.text(x2, y = y + yi, '3. Nik')
        doc.text(x4, y, `   : ${data.nik}`)

        doc.text(x2, y = y + yi, '4. NISN')
        doc.text(x4, y, `   : ${data.nisn}`)

        doc.text(x2, y = y + yi, '5. Jenis Kelamin')
        doc.text(x4, y, `   : ${data.jeniskelamin}`)

        doc.text(x2, y = y + yi, '6. Agama')
        doc.text(x4, y, `   : ${data.agama}`)

        doc.text(x2, y = y + yi, '7. Alamat')
        doc.text(x4, y, `   : ${data.alamat}`)

        doc.text(x2, y = y + yi, '8. Kelurahan')
        doc.text(x4, y, `   : ${data.kelurahan}`)

        doc.text(x2, y = y + yi, '9. Kecamatan')
        doc.text(x4, y, `   : ${data.kecamatan}`)

        doc.text(x2, y = y + yi, '10.Kota')
        doc.text(x4, y, `   : ${data.kota}`)

        doc.text(x2, y = y + yi, '11.Provinsi')
        doc.text(x4, y, `   : ${data.provinsi}`)

        doc.text(x2, y = y + yi, '12.Kode Pos')
        doc.text(x4, y, `   : ${data.kodepos}`)

        doc.text(x2, y = y + yi, '13.Rencana Program')
        doc.text(x4, y, `   : ${data.rencanaprogram}`)

        doc.text(x2, y = y + yi, '14.Email')
        doc.text(x4, y, `   : ${data.email}`)

        doc.text(x2, y = y + yi, '15.No Hp')
        doc.text(x4, y, `   : ${data.nohppribadi}`)

        doc.text(x2, y = y + yi, '16.No Ijazah')
        doc.text(x4, y, `   : ${data.noijazah}`)

        doc.text(x2, y = y + yi, '17.No SKHU')
        doc.text(x4, y, `   : ${data.noskhu}`)

        doc.text(x2, y = y + yi, '18.Tahun Tamat')
        doc.text(x4, y, `   : ${data.tahuntamat}`)

        doc.text(x, y = y + yi + yi, 'II. Data Orang Tua')
        doc.text(x2, y = y + yi, '1. Nama Ayah')
        doc.text(x4, y, `   : ${data.namaayah}`)

        doc.text(x2, y = y + yi, '2. Tahun Lahir Ayah')
        doc.text(x4, y, `   : ${data.tahunlahirayah}`)

        doc.text(x2, y = y + yi, '3. Pekerjaan Ayah')
        doc.text(x4, y, `   : ${data.pekerjaanayah}`)

        doc.text(x2, y = y + yi, '4. Pendidikan Terakhir Ayah')
        doc.text(x4, y, `   : ${data.pendidikanterakhirayah}`)

        doc.text(x2, y = y + yi, '5. No. Hp Ayah')
        doc.text(x4, y, `   : ${data.nohpayah}`)

        doc.text(x2, y = y + yi, '6. Nama Ibu')
        doc.text(x4, y, `   : ${data.namaibu}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Ibu')
        doc.text(x4, y, `   : ${data.tahunlahiribu}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Ibu')
        doc.text(x4, y, `   : ${data.pekerjaanibu}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Ibu')
        doc.text(x4, y, `   : ${data.pendidikanterakhiribu}`)

        doc.text(x2, y = y + yi, '10. No. Hp Ibu')
        doc.text(x4, y, `   : ${data.nohpibu}`)

        doc.text(x, y = y + yi + yi, 'III. Wali')
        doc.text(x2, y = y + yi, '6. Nama Wali')
        doc.text(x4, y, `   : ${data.namawali}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Wali')
        doc.text(x4, y, `   : ${data.tahunlahirwali}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Wali')
        doc.text(x4, y, `   : ${data.pekerjaanwali}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Wali')
        doc.text(x4, y, `   : ${data.pendidikanterakhirwali}`)

        doc.text(x2, y = y + yi, '10. No. Hp Wali')
        doc.text(x4, y, `   : ${data.nohpwali}`)

        doc.save("pendaftar.pdf")


    }

    return (<article className="br3 ba dark-gray b--black-10  w-100 pb3 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">

            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Form SKL</legend>
                <div >
                    <label className="db fw6 lh-copy f6 " >Nomor Induk</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                        onChange={(e) => setni(e.target.value)}
                        type="text" name="title" id="title" />
                </div>


            </fieldset>
            <div className="">
                <input onClick={handleclick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow povarer f6 dib" type="submit" value="Cetak" />
            </div>
        </main>
    </article>)
}

export default Skladmin;