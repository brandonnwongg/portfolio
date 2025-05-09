import { useEffect, useState } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { Room } from "./Room";
import { Welcome } from "./Welcome";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
    value: 'Sleeping',
    options: ['Sleeping', 'Entering', 'Standing', 'Falling'],
    },
  })

  const [rightOffset, setRightOffset] = useState(350); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const minWidth = 600;
      const maxWidth = 1600;
      const clamped = Math.max(minWidth, Math.min(maxWidth, width));
      const progress = (clamped - minWidth) / (maxWidth - minWidth); 
      const offset = Math.round(progress * 350);
      setRightOffset(offset);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <OrbitControls />
      <group name="Empty" position={[-2.572, -5.175, 5.981]} rotation={[-Math.PI, 0.937, -Math.PI]} scale={5.825}>
      <Avatar animation={animation} />
      </group>
      <ambientLight intensity={1} />
      <Room />
      <Html
        transform={false}
        style={{
          position: "fixed",
          top: "-200px",
          right: `${rightOffset}px`,
          transition: "right 0.5s ease",
          zIndex: 10,
        }}
      >
        <Welcome />
      </Html>
    </>
  );
};
