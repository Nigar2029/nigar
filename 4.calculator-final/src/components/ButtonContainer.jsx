import styles from "./Button.module.css"
const buttonContainer =({onButtonClick})=>{
    const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0 ", "."]
    return(
        <>

              <div className={styles.buttonContainer}>
                {buttonNames.map((buttonName, i)=>{
                   return <button key={i} className={styles.buttons}
                   onClick={()=>onButtonClick(buttonName)}
                   >{buttonName}</button>

                })}
            </div>
        </>
    )
}
export default buttonContainer;