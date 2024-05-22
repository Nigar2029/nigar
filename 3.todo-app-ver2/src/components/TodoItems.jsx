import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
function TodoItems({todoItems}){
    return(
        <div className={styles.itemContainer}>
            {todoItems.map((items, index)=>
            
            (<div key={index} className={styles.itemContainer}>
                <TodoItem key={index} todoName={items.name} todoDate={items.dueDate}/>
                 </div>
        ))}
        </div>
    )
}
export default TodoItems;