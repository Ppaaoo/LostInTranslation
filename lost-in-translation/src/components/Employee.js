function Employee(props) {
    return (
    <>
        <h3>Employee {props.name}</h3>
        {props.role ? <p>{props.role}</p> : <p>Is cat</p>}
    </>
    )
}

export default Employee