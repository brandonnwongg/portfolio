import { Canvas } from "@react-three/fiber";
import { Experience } from "./assets/components/Experience";


function App() {
  return (
    <Canvas shadows camera={{ position: [-7, 1, 8], fov: 35 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;