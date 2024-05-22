let CurrentTime =()=>{
    let time = new Date();
    return <>
    <h5 className="lead">This is the current Time : 
        {time.toLocaleTimeString()} -

        {time.toLocaleDateString()}</h5>
    </>
}
export default CurrentTime;