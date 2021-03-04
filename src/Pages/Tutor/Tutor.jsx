import React from 'react';
import Cardlisttutor from './Cardlisttutor';
import Searchbox from '../../components/Search/search.component';
import {firestore} from '../Admin/firebase/firebase.utils';


const Tutor = ()=>{
    const [data, setdata] = React.useState([]);
    const [searchfield, setsearchfield] = React.useState('');

    React.useEffect(() => {
        firestore.collection('tutor')
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

    
const filteredtutor = data.filter(tutor => {
    return tutor.nama.toLowerCase().includes(searchfield.toLowerCase());
})

    return (
        <div className="tc pv5 black bg-lightest-blue">
            <h3 className="blue">Tutor Yayasan PKBM Hanuba</h3>
            {<Searchbox onchangesearch={onchangesearch}/>}
            {<Cardlisttutor data={filteredtutor}/>}
        </div>
    );
}
    


export default Tutor;