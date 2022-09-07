// import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import db from '../firebase'

const GetData = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   const q = query(collection(db, 'crudDatabase'), orderBy('time', 'desc'))
    //   onSnapshot(q, (querySnapshot) => {
    //     setData(
    //       querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
    //       })),
    //     )
    //   })
    // }, [])
    
    // console.log(data);
  return (
    <div>
        {/* {
            data.map(item => (
                <div className='container' key={item.id}>
                    <h3>{item.data.quotes}</h3>
                    <Link to={`/edit/${item.id}`}>
                    <button className='btn btn-primary' >Edit</button>
                    </Link>
                </div>
            ))
        } */}
    </div>
  )
}

export default GetData