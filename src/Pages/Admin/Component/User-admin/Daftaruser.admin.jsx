import React from 'react';
import Materialtable from '../Materialtable-admin/Materialtable.admin';

const Daftaruser = ()=>{

    const collection="users";
    const title = "User";
   const  columns= [
    { title: 'Name', field: 'displayName' },
    { title: 'Email', field: 'email' }]

    return(
        <Materialtable columns={columns} collection={collection} title={title}/>
    )
}

export default Daftaruser;