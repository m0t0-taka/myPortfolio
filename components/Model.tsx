import { Html, useGLTF } from "@react-three/drei";

const Model = () => {
  const macbookModel = useGLTF("/models/macbook.gltf");
  return (
    <primitive object={macbookModel.scene} position={[0, -1.5, 0]}>
      {/* macbook画面内に埋め込む */}
      <Html
        position={[0, 1.56, -1.4]}
        distanceFactor={1.17}
        rotation-x={-0.256}
        transform
        wrapperClass=""
      >
        <iframe
          className="w-[1024px] h-[670px] rounded-2xl"
          src="https://main.dh6mayboskke8.amplifyapp.com/"
        ></iframe>
      </Html>
    </primitive>
  );
};

export default Model;
