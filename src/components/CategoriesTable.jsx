import React from "react";
import CategoryItem from "./CategoryItem";
import styles from "../styles/CategoriesTable.module.scss";
import { useLocation } from "react-router";

const caegories = [
  { id: "1", title: "Rabbits",category:"rabbits", img: "", alt: "Rabbit", color: "red" },
  { id: "2", title: "Children",category:"child", img: "", alt: "Rabbit", color: "red" },
  { id: "3", title: "City",category:"city", img: "", alt: "Rabbit", color: "red" },
  { id: "4", title: "Comics",category:"comics", img: "", alt: "Rabbit", color: "red" },
];

const CategoriesTable = () => {

   
  return (
    <div className={styles.container}>
      {caegories.map((categoryItem) => {
        return <CategoryItem key={categoryItem.id} category={categoryItem}/>;
      })}
    </div>
  );
};

export default CategoriesTable;
