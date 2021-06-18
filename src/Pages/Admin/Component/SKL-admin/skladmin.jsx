import React from 'react';
import firebase, { adddata, firestore } from '../../firebase/firebase.utils';
import jsPDF from 'jspdf';

const Skladmin = () => {
    const [data, setdata] = React.useState([]);
    const [ni, setni] = React.useState("");
    const handleclick = async (e) => {
        firestore.collection('siswa').doc(`${ni}`)
            .get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());


                    console.log(doc.data().namalengkap);
                    setdata({ namalengkap: doc.data().namalengkap });

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            })
        pdfgenerator();
console.log(data.namalengkap);
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
        doc.text(x, y = y + yi + yi, 'No. Pendaftaran')
        doc.text(x4, y, `   : .nopendaftaran}`)
        doc.text(x, y = y + yi + yi, 'I. CALON SISWA')
        doc.text(x2, y = y + yi, '1. Nama Lengkap')
        doc.text(x4, y, `   : .namalengkap}`)

        doc.text(x2, y = y + yi, '2. Tempat/tgl lahir')
        doc.text(x4, y, `   :.tempatdantanggallahir}`)

        doc.text(x2, y = y + yi, '3. Nik')
        doc.text(x4, y, `   : .nik}`)

        doc.text(x2, y = y + yi, '4. NISN')
        doc.text(x4, y, `   : .nisn}`)

        doc.text(x2, y = y + yi, '5. Jenis Kelamin')
        doc.text(x4, y, `   : .jeniskelamin}`)

        doc.text(x2, y = y + yi, '6. Agama')
        doc.text(x4, y, `   : .agama}`)

        doc.text(x2, y = y + yi, '7. Alamat')
        doc.text(x4, y, `   : .alamat}`)

        doc.text(x2, y = y + yi, '8. Kelurahan')
        doc.text(x4, y, `   : .kelurahan}`)

        doc.text(x2, y = y + yi, '9. Kecamatan')
        doc.text(x4, y, `   : .kecamatan}`)

        doc.text(x2, y = y + yi, '10.Kota')
        doc.text(x4, y, `   : .kota}`)

        doc.text(x2, y = y + yi, '11.Provinsi')
        doc.text(x4, y, `   : .provinsi}`)

        doc.text(x2, y = y + yi, '12.Kode Pos')
        doc.text(x4, y, `   : .kodepos}`)

        doc.text(x2, y = y + yi, '13.Rencana Program')
        doc.text(x4, y, `   : .rencanaprogram}`)

        doc.text(x2, y = y + yi, '14.Email')
        doc.text(x4, y, `   : .email}`)

        doc.text(x2, y = y + yi, '15.No Hp')
        doc.text(x4, y, `   : .nohppribadi}`)

        doc.text(x2, y = y + yi, '16.No Ijazah')
        doc.text(x4, y, `   : .noijazah}`)

        doc.text(x2, y = y + yi, '17.No SKHU')
        doc.text(x4, y, `   : .noskhu}`)

        doc.text(x2, y = y + yi, '18.Tahun Tamat')
        doc.text(x4, y, `   : .tahuntamat}`)

        doc.text(x, y = y + yi + yi, 'II. Data Orang Tua')
        doc.text(x2, y = y + yi, '1. Nama Ayah')
        doc.text(x4, y, `   : .namaayah}`)

        doc.text(x2, y = y + yi, '2. Tahun Lahir Ayah')
        doc.text(x4, y, `   : .tahunlahirayah}`)

        doc.text(x2, y = y + yi, '3. Pekerjaan Ayah')
        doc.text(x4, y, `   : .pekerjaanayah}`)

        doc.text(x2, y = y + yi, '4. Pendidikan Terakhir Ayah')
        doc.text(x4, y, `   : .pendidikanterakhirayah}`)

        doc.text(x2, y = y + yi, '5. No. Hp Ayah')
        doc.text(x4, y, `   : .nohpayah}`)

        doc.text(x2, y = y + yi, '6. Nama Ibu')
        doc.text(x4, y, `   : .namaibu}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Ibu')
        doc.text(x4, y, `   : .tahunlahiribu}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Ibu')
        doc.text(x4, y, `   : .pekerjaanibu}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Ibu')
        doc.text(x4, y, `   : .pendidikanterakhiribu}`)

        doc.text(x2, y = y + yi, '10. No. Hp Ibu')
        doc.text(x4, y, `   : .nohpibu}`)

        doc.text(x, y = y + yi + yi, 'III. Wali')
        doc.text(x2, y = y + yi, '6. Nama Wali')
        doc.text(x4, y, `   : .namawali}`)

        doc.text(x2, y = y + yi, '7. Tahun Lahir Wali')
        doc.text(x4, y, `   : .tahunlahirwali}`)

        doc.text(x2, y = y + yi, '8. Pekerjaan Wali')
        doc.text(x4, y, `   : .pekerjaanwali}`)

        doc.text(x2, y = y + yi, '9. Pendidikan Terakhir Wali')
        doc.text(x4, y, `   : .pendidikanterakhirwali}`)

        doc.text(x2, y = y + yi, '10. No. Hp Wali')
        doc.text(x4, y, `   : .nohpwali}`)

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
                <input onClick={handleclick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Cetak" />
            </div>
        </main>
    </article>)
}

export default Skladmin;