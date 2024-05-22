import { useState } from "react";
import styles from "./Item.module.css"


const Item = ({ foodItem, handleBuyFood, bought}) => {
 //   const handleBuyFoodItem=(event)=>{
//     console.log(event)
//     console.log(`${foodItem} is being bought`)
//   }


  return (
    <>
 
    <li className={`${styles["bg-color"]} list-group-item   ${bought && 'active' } `} > 
    <span className={styles["text-center"]}>{foodItem}</span> 
    <button className={`${styles.button} btn btn-success`}
    onClick={handleBuyFood}>
    Buy</button> 
    </li>
    </>
  );
};

export default Item;
