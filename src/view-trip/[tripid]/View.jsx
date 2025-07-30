import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
 import { doc, getDoc } from "firebase/firestore";
import { Button } from '@/components/ui/button';
import { db } from '@/service/FirebaseConfig';
import Infosection from './components/Infosection';
function Viewtrip() {
    const {tripid}=useParams()
const[tripdata,settripdata]=useState(null)
const getdata=async()=>{
const docRef = doc(db, "Trips", tripid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  settripdata(docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}
//  useEffect(() => {
//     getdata(); // fetch data on mount
//   }, [tripid]);

  return (
    <div>
      <Infosection trip={tripdata}/>
      <Button onClick={getdata}>Get Data </Button>
    </div>
  )
}

export default Viewtrip
