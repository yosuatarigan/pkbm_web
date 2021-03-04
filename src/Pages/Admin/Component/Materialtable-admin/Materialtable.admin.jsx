import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import  { updatedata, adddata, deletedata, firestore } from '../../firebase/firebase.utils';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Materialtable({columns,collection,title,emailuser}) {
    //columnt berbentuk Array
  

  const [data, setdata] = React.useState([]);
  const [refresher, setrefresher] = React.useState(false);


  const handlerefresh = () => {
    if(refresher === false){
      setrefresher(true)
    }
    else if(refresher=== true){
      setrefresher(false)
    }
};


  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore()
  //     const data = await db.collection(collection).get()
  //     setdata(data.docs.map(doc => ({...doc.data(), id:doc.id } )))
  //     // console.log(data.docs.map(doc => ({...doc.data(), id:doc.id } )))
  //   }
  //   fetchData()
  // }, [refresher])

  React.useEffect(() => {
    firestore.collection(collection)
    .onSnapshot((snapshot)=>{
      const data = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      setdata(data)
    })
  }, [refresher])

 
  return (
    <MaterialTable
      icons={tableIcons}
      title={title}
      columns={columns}
      data={data}
      options={{
        exportButton: true
      }}
      
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              adddata(collection,newData)
              if(collection==='artikel'){
                const objeknya = newData.title
                adddata('aktivitas',{ emailuser,aksi : `menambahkan ${collection} ${objeknya}  `})
              }
              
              handlerefresh();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              updatedata(collection,newData.id,newData)
              handlerefresh();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
                deletedata(collection,oldData.id)
                handlerefresh();
            }, 1000);
          }),
      }}
    />
  );
}
