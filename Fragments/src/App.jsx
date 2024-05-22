
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'
import ErrorMess from './components/ErrorMess'
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {

  // console.log(`current value ${textToShow}`)
let [textToShow, setTextvalue] = useState();
let [foodItems, setFoodItems] =useState(["milk", "icecream", "coffee"])
const handleOnKeyDown =(event)=>{
  if(event.key === "Enter"){
    let newFoodValue = event.target.value;
    event.target.value ="";
    // console.log(`the food item entered is ${newValue}`);
    let newItems = [...foodItems, newFoodValue]
    setFoodItems(newItems);

  }
}
  return (
    <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMess items={foodItems} />
        <FoodInput handleOnKeyDown={handleOnKeyDown}/>
         <p>{textToShow}</p>
        <FoodItems items ={foodItems} />
    </Container>  )
}

export default App;
