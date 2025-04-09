import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import './App.css'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { BoxHelper } from 'three'

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
      </mesh>
    </Canvas>
  )
}

export default App
