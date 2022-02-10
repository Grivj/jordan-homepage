import { Box } from '@chakra-ui/react';
import { Center, Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from 'react';
import { Model } from '../lib/model';



interface MacBookSceneProps {
  scale?: number,
  height?: string,
}

const MacBookScene = ({ scale = 1, height = "300px" }: MacBookSceneProps) => (
  <Box height={{ base: "500px", xl: "100%" }}>
    <Canvas>
      <Suspense fallback={null}>
        <Center>
          <Float>
            <Model scale={scale} />
          </Float>
        </Center>

        {/* <OrbitControls autoRotate={true} /> */}
        <OrbitControls maxDistance={50} minDistance={1} enablePan={false} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  </Box>
)



export default MacBookScene