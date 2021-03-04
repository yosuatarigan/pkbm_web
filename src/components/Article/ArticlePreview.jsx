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
		<section id="artikel" className="mw7 center">
            

                <div className="section-title">
                    <h2>Artikel</h2>
                    <h3>Artikel di <span>PKBM Hanuba</span></h3>
                    </div>
                    {data
                    .map((user, i) => {
                        if(i > (data.length -3 ) ){
                            return (
                                <Cardarticle
                                    key={i}
                                    title={data[i].title}
                                    desc={data[i].desc}
                                    coverurl={data[i].coverurl}
                                    seturlimage = {seturlimage}
                                    settitle={settitle}
						setdesc={setdesc}
						toggle={toggle}
                                />
                            );
                        }
                        else{
                            return null;
                        }
                
            })}
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
                

                

    </section>
	);
}

export default Article;