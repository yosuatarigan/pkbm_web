import React,{useState} from 'react';
import Cardgaleri from './Cardgaleri2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { firestore } from '../../Pages/Admin/firebase/firebase.utils';
import Cardlist from './Cardlistgaleri';
import Searchbox from '../../components/Search/search.component';


const Galeri = () => {
	const [data, setdata] = React.useState([]);
	const [searchfield,setsearchfield] = React.useState('');
	const [modal, setModal] = useState(false);
	const [urlimage,seturlimage] = useState('');
	const [title,settitle] = useState('');

	

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

	const onchangesearch = (e)=>{
		setsearchfield(e.target.value)
	}
	
	
	
	const filteredGaleri = data.filter(galeri => {
		return galeri.title.toLowerCase().includes(searchfield.toLowerCase());
	})
	
	const toggle = () =>{
		setModal(!modal);
   }

	return (
		<div class="container pv5">

			<h1 class="font-weight-light text-center text-lg-left mt-4 mb-0 blue">Galeri</h1>

			<hr class="mt-2 mb-5" />
			<div className="tc">
			{<Searchbox onchangesearch={onchangesearch}/>}
			</div>

			<div class="row text-center text-lg-left">
			{<Cardlist data={filteredGaleri} toggle={toggle} seturlimage={seturlimage} settitle={settitle}/>}
			</div>
			<Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>

        <img  src={urlimage}  />

        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Kembali</Button>
        </ModalFooter>
      </Modal>
		</div>
	);
}

export default Galeri;