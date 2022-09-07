// import { doc, getDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import db from "../firebase";

const AddData = () => {
  //   const { id } = useParams()

  //   const [quoteData, setQuoteData] = useState('')
  //   const [quote, setQuote] = useState(quoteData)
  //   console.log('quoteData>>>>',quoteData)
  //   console.log('>>>',id);
  // useEffect(() => {
  //   const getData = async () => {
  //     const docRef = doc(db, 'crudDatabase', id)
  //       const docSnap = await getDoc(docRef)
  //       let data = docSnap.data()
  //       setQuote(data.quotes)
  //  }
  //   getData()
  // }, [id])
  // console.log('quote>>>>',quote);

  return (
    <div>
      {/* <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={quote}
          onChange={e => setQuote(e.target.value)}
        />
      </div> */}
    </div>
  );
};

export default AddData;
