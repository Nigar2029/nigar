

function AddTodo(){
  return <>
  <div className="container">
    <div className="row bg.row">
      <div className="col-6">
      <input type="text" placeholder="Enter todo " /></div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button className="btn btn-success bg-btn">
          ADD
        </button>
      </div>
    </div>
  </div>
  </>
}
    
export default AddTodo;