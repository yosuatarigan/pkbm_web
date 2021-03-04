import React from 'react';
import Flag from './FlagKegiatan';
import {firestore} from '../Admin/firebase/firebase.utils';


const NoteKegiatan = () => {
	const [data, setdata] = React.useState([]);

	React.useEffect(() => {
		firestore.collection('galeri')
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setdata(data)
			})
	}, [])

	return (
		<div >
			<article className='center'>
				<header className="tc b--black-70 pv4">
					<h3 className="blue f2 fw7 ttu tracked lh-title mt0 mb2 ">Kegiatan di Sekolah</h3>
					{/* <h4 class="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4> */}
				</header>

				<article>
					<div className="cf pa2">
					{data.map((user, i) => {
						if(i > (data.length -4 ) ){
                return (
                    <Flag
                        key={i}
                        title={data[i].title}
						desc={data[i].desc}
						coverurl={data[i].coverurl}
                    />
                );}
            })}
					</div>
				</article>
			</article>
		</div>
	);
}

export default NoteKegiatan;