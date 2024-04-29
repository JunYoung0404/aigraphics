import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TetrahedronGeometry } from "three"; // 테트라에드론을 사용하여 다이아몬드 모양 생성

function MyElement3D() {
    const refMesh = useRef();
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta;
    }); 
    return (
        <>
            <directionalLight position={[1, 1, 1]} />
            <mesh ref={refMesh} rotation-y={50 * Math.PI / 200}>
                <tetrahedronGeometry attach="geometry" args={[1, 0]} /> {/* 다이아몬드 모양의 geometry */}
                <meshStandardMaterial color="#00ffff" />
            </mesh>
        </>
    );
}

export default MyElement3D;