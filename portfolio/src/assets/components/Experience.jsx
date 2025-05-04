import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={3} />
      <Room />
    </>
  );
};