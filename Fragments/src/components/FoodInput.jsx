import styles from "./FoodInput.module.css";

function FoodInput ({handleOnKeyDown}){
 
    return<>
    <input type="text" placeholder="search food here" 
    className={styles.foodInput} onKeyDown={handleOnKeyDown}/>
  
    </>
}

export default FoodInput;