
function TodoItem({todoName, todoDate}){
  return (
    <div className="container">
    <div className="row bg-row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="buttton" className="btn btn-danger bg-btn">
          Delete
        </button>
      </div>
    </div>
    </div>
  )
}
export default TodoItem;