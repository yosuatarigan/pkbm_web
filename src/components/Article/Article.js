import React,{useState} from 'react';
import {firestore} from '../../Pages/Admin/firebase/firebase.utils';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cardarticle from './Cardarticle';

const Article = () => {
	const [data, setdata] = React.useState([]);
	const [modal, setModal] = useState(false);
    const [urlimage,seturlimage] = useState('');
	const [desc,setdesc] = useState('');
	const [title,settitle] = useState('');

	React.useEffect(() => {
		firestore.collection('article')
			.onSnapshot((snapshot) => {
				const data = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}))
				setdata(data)
			})
	}, [])
	const toggle = () =>{
		setModal(!modal);
   }

	return (
		<>
		<section class="mw7 center">
  <h3 class="athelas blue ph3 ph0-l">Article</h3>
                    {data.map((user, i) => {
                return (
                    <Cardarticle
                        key={i}
                        title={data[i].title}
						desc={data[i].desc}
						coverurl={data[i].coverurl}
						account={data[i].account}
						seturlimage = {seturlimage}
						setdesc={setdesc}
						toggle={toggle}
						settitle={settitle}
                    />
                );
            })}
    </section>
	<Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>

        <img  src={urlimage}  />
    <p>{desc}</p>

        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Kembali</Button>
        </ModalFooter>
      </Modal>
	</>
	);
}

export default Article;