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
      console.log(newData)
      console.log("items ", items, newData);
    }).catch((err) => {console.log('error while fetching from firebase', err)});
  };
  console.log(items)

  useEffect(() => {
    
    getItems();
  }, []);
  console.log(items)
  return items

}