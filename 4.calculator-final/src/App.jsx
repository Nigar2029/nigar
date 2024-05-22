import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/ButtonContainer";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      // setCalValue(eval(calValue).toString());
      const reult = eval(calValue)
      setCalValue(reult);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
      console.log(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
