import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export const useGetData = () => {
const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  const getItems = async () => {
    await getDocs(itemsCollectionRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(newData);
    }).catch((err) => {console.log('error while fetching from firebase', err)});
  };

  useEffect(() => {
    
    getItems();
  }, []);
  console.log('GetData',items)
  return items

}