import Appliances from "./Appliances";

const Kitchen = (props) => {
  console.log(props);
  return (
    <>
      <div>
        Kitchen
        <Appliances name='Oven'/>
        <Appliances name='Sink'/>
      </div>
    </>
  );
}
 
export default Kitchen;