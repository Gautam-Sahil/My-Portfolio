"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MagicalBond = React.memo(function MagicalBond(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Magicalbond-transformed.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions['Scene']) {
      actions['Scene'].play();  
    }
  }, [actions]);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.007; 
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.5, 1, 1]} 
      position={[0, -3, 0]} 
      ref={group}
    >
      <group name="MagicalBond_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.Base}
          skeleton={nodes.Object_9.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.Accessories}
          skeleton={nodes.Object_10.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
});

export default MagicalBond;

useGLTF.preload("/models/Magicalbond-transformed.glb");
