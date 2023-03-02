import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export const useGetDataById = (id) => {
const [item, setItem] = useState({});
  const itemDocRef = doc(db, "items", id);
  const getItems = async () => {
    await getDoc(itemDocRef).then((querySnapshot) => {
      const newData = querySnapshot.data()
      setItem(newData);
      console.log(newData)
      console.log("items ", item, newData);
    }).catch((err) => {console.log('error while fetching from firebase', err)});
  };

  useEffect(() => {
    
    getItems();
  }, []);
  return item

}