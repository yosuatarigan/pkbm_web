import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftarsiswa = ()=>{

    const collection="siswa";
    const title = "SISWA";
   const  columns= [
    {title : 'Nama Lengkap', field :'namalengkap'},
    {title : 'Tempat dan Tanggal Lahir', field :'tempatdantanggallahir'},
    {title : 'NIK', field :'nik'},
    {title : 'NISN', field :'nisn'},
    {title : 'Jenis Kelamin', field :'jeniskelamin'},
    {title : 'Agama', field :'agama'},
    {title : 'Alamat', field :'alamat'},
    {title : 'Kelurahan', field :'kelurahan'},
    {title : 'Kecamatan',field :'kecamatan'},
    {title : 'Kota',field :'kota'},
    {title : 'Provinsi',field :'provinsi'},
    {title : 'Kodepos',field :'kodepos'},
    {title : 'No Ijazah', field :'noijazah'},
    {title : 'No SKHU', field :'noskhu'},
    {title : 'Tahun Tamat', field :'tahuntamat'},
    {title : 'Rencana Program', field :'rencanaprogram'},
    {title : 'Email', field :'email'},
    {title : 'No Telepon Pribadi', field :'nohppribadi'},
    {title : 'Nama Ayah', field :'namaayah'},
    {title : 'Tahun Lahir Ayah',field :'tahunlahirayah'},
    {title : 'Pekerjaan Ayah',field :'pekerjaanayah'},
    {title : 'Pendidikan Terakhir Ayah',field :'pendidikanterakhirayah'},
    {title : 'No Telepon Ayah',field :'nohpayah'},
    {title : 'Nama Ibu',field :'namaibu'},
    {title : 'Tahun Lahir Ibu', field :'tahunlahiribu'},
    {title : 'Pekerjaan Ibu',field :'pekerjaanibu'},
    {title : 'Pendidikan Terakhir Ibu', field :'pendidikanterakhiribu'},
    {title : 'No Telepon Ibu',field :'nohpibu'},
    {title : 'Nama Wali', field :'namawali'},
    {title : 'Tahun Lahir Wali', field :'tahunlahirwali'},
    {title : 'Pekerjaan Wali', field :'pekerjaanwali'},
    {title : 'Pendidikan Terakhir Wali', field :'pendidikanterakhirwali'},
    {title : 'No Telepon Wali', field :'nohpwali'}]



    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftarsiswa;