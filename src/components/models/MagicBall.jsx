"use client";
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const MagicBall = React.memo(function MagicBall(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/MagicBall-transformed.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions['Animation']) {
      actions['Animation'].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="Cylinder_1" scale={[1.141, 0.077, 1.141]}>
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group name="Cylinder001_2" rotation={[0, 0, -Math.PI / 2]} scale={[1.244, 0.077, 1.244]}>
            <mesh
              name="Object_9"
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group name="Cylinder002_3" rotation={[0.105, 0, 0]} scale={[1.468, 0.084, 1.468]}>
            <mesh
              name="Object_11"
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials['Material.001']}
            />
          </group>
        </group>
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  );
});

useGLTF.preload('/models/MagicBall-transformed.glb');
export default MagicBall;
