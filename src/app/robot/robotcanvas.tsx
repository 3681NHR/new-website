// 'use client';
// //ill fix it later
// //import { useRef, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { Box } from '@chakra-ui/react';

// import { useScroll, useMotionValueEvent } from 'motion/react';

// function Model(props: { position: number[]; scale: number }) {
//   const { scene } = useGLTF('/teapot.gltf');

//   return <primitive object={scene} {...props} />;
// }

// export default function RobotCanvas() {
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, 'change', latest => {
//     console.log('Page scroll: ', latest);
//   });

//   return (
//     <Box
//       position="fixed"
//       right={'0'}
//       bottom="50%"
//       transform="translateY(+50%)"
//       width="50%"
//       height="100%"
//     >
//       <Canvas>
//         <ambientLight intensity={Math.PI / 2} />
//         <spotLight
//           position={[10, 10, 10]}
//           angle={0.15}
//           penumbra={1}
//           decay={0}
//           intensity={Math.PI}
//         />
//         <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//         <Model position={[0, 0, 0]} scale={0.05} />
//         <OrbitControls />
//       </Canvas>
//     </Box>
//   );
// }
