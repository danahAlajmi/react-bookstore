function ProducIitem(props) {
  const key = props.id;
  return (
    <div>
      <img src={props.image} width="200" height="200"></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}
export default ProducIitem;
