import React from 'react';
import {firestore} from '../Admin/firebase/firebase.utils';
import Cardtampil from './Cardtampilpesan';

const Tampilsaran = ()=>{

    const [data, setdata] = React.useState([]);

    React.useEffect(() => {
        firestore.collection('kritikdanpesan')
        .onSnapshot((snapshot)=>{
          const data = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }))
          setdata(data)
        })
      }, [])

    return (
        <div>
            {data.map((user, i) => {
                return (
                    <Cardtampil
                        key={i}
                        nama={data[i].displayName}
                        pesankritik={data[i].kritikdanpesan}
                    />
                );
            })}
        </div>
    );
}

export default Tampilsaran;