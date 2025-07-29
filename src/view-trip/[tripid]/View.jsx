import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
 import { doc, getDoc } from "firebase/firestore";
import { Button } from '@/components/ui/button';
import { db } from '@/service/FirebaseConfig';
import Infosection from './components/Infosection';
function Viewtrip() {
    const {tripid}=useParams()
   
const getdata=async()=>{
const docRef = doc(db, "Trips", tripid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}
  return (
    <div>
      <Infosection trip={getdata}/>
      <Button onClick={getdata}>Get Data </Button>
    </div>
  )
}

export default Viewtrip
