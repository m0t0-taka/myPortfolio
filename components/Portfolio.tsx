/* eslint-disable react/no-unknown-property */
import { ContactShadows, Float, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Portfolio = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Portfolio
      </h3>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.8, 6] }}>
        {/* 明かり */}
        <ambientLight />
        {/* 上からのライト */}
        <directionalLight intensity={1.4} />

        {/* globalを付けることでモデル以外のところを触った状態でモデルをcontrolできる */}
        <PresentationControls
          global
          // 動きを制御
          config={{ mass: 2, tension: 400 }}
          // 元の位置に戻す
          snap={{ mass: 4, tension: 200 }}
        >
          {/* モデルを浮かせる＋回転させる */}
          <Float rotationIntensity={1.3}>
            {/* 明かり */}
            {/* intensityは光量 */}
            {/* positionのzは手前が+ */}
            <rectAreaLight
              color={"#7ecdf1"}
              intensity={50}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <Model />
          </Float>
        </PresentationControls>

        {/* 影 */}
        <ContactShadows scale={7} blur={2.4} opacity={0.5} position-y={-1.8} />
      </Canvas>
    </div>
  );
};

export default Portfolio;
