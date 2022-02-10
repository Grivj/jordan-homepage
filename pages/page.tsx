import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import MacBook from '../components/MacBook'
import VoxelDogLoader from '../components/voxel-dog-loader'
import styles from '../styles/Home.module.css'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            {/* <LazyVoxelDog /> */}

            <Canvas  gl={{ antialias: false }}>
                <Suspense fallback={null}>
                    <MacBook />
                    <OrbitControls />
                    <Environment preset="studio" />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Home
