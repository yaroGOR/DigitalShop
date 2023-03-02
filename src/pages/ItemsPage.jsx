import React, { useEffect, useState } from "react";
import styles from "../styles/ItemsPage.module.scss";
import ItemCell from "../components/ItemCell";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useGetData } from "../firebase/getData";
import Modal from "../components/Modal";
import { useMedia } from "../hooks/useMedia";

function sortItemsByPrice(items, isAscending) {
  return items.sort((a, b) => {
    if (isAscending) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}

function sortItemsByPopularity(items, isAscending) {
  return items.sort((a, b) => {
    if (isAscending) {
      return a.popular - b.popular;
    } else {
      return b.popular - a.popular;
    }
  });
}
const ItemsPage = () => {
  // const items = [
  //     {id:'1',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'1',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'2',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'3',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'4',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'5',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // },
  // {id:'6',
  //     title:'rabbit',
  //     img:'',
  //     alt:'img',
  //     description:'Tempor incididunt non minim aliqua ad enim consequat id Lorem esse ex quis aliqua nostrud.',
  //     price:200,
  //     format:'png'
  // }
  // ]

  let width = useMedia();

  const [showSide, setShowSide] = useState(true);

  let isMobile = width < 900 ? true : false;
  useEffect(() => {
    if (isMobile) {
      setShowSide(false);
    } else {
      setShowSide(true);
    }
  }, [isMobile]);

  const [searchParams] = useSearchParams()
  const query = searchParams.get('category')?.substring(1)
  const [category, setCategory] = useState(query||'All');

  

  let items = useGetData();
  items = category === 'All' ? items : filterByCategory(items, category);
  

  const [isAscendingPrice, setIsAscendingPrice] = useState(true);
  const [isAscendingPopularity, setIsAscendingPopularity] = useState(true);

  function handleSortByPriceClick() {
    setIsAscendingPrice(!isAscendingPrice);
    items = sortItemsByPrice(items, isAscendingPrice);
  }
  function handleSortByPopularityClick() {
    setIsAscendingPopularity(!isAscendingPopularity);
    items = sortItemsByPopularity(items, isAscendingPopularity);
  }
  function filterByCategory(arr, category) {
    return arr.filter(item => item.category === category);
  }
  return (
    <>

    <div className={styles.container}>
      {showSide && <div className={styles.left}>
        <div className={styles.filter}>
          <label>Select category:</label>
          <select className={styles.select }value={category} onChange={e=>{setCategory(e.target.value)}}>
            <option value="rabbits">Rabbits</option>
            <option value="comics">Comics</option>
            <option value="city">City</option>
            <option value="child">Children</option>
          </select>
       
        <div className={styles.sort}>
            <label>Sort:</label>
          <button onClick={handleSortByPriceClick}>
            Sort by {isAscendingPrice ? "ascending" : "descending"} price
          </button>
          <button onClick={handleSortByPopularityClick}>
            Sort by {isAscendingPopularity ? "ascending" : "descending"}{" "}
            Popularity
          </button>
        </div>
        </div>
      </div>
}
      <div className={styles.right}>
        <h3>{category}</h3>
        <div className={styles.itemsList}>
          {items.map((item) => {
            return (
                <ItemCell item={item} />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default ItemsPage;
