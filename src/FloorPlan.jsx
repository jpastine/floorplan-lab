import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  console.log(props)
  return ( 
    <>
      <Bedroom />
      <Kitchen />
      <Bath />
      <Bedroom />
      <LivingRoom />
      <Bath />
      <Bedroom />
      

    </>
  );
}
 
export default FloorPlan;