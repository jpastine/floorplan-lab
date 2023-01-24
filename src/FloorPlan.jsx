import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  console.log(props)
  return ( 
    <>
      <Bedroom bednum='1'/>
      <Kitchen />
      <Bath size='Full'/>
      <Bedroom bednum='2'/>
      <LivingRoom />
      <Bath size='Half'/>
      <Bedroom bednum='3'/>
      

    </>
  );
}
 
export default FloorPlan;