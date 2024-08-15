import { Html, useProgress } from "@react-three/drei";
import { HashLoader } from "react-spinners";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <HashLoader color="#ebbb00" size={50} />
    </Html>
  );
};

export default CanvasLoader;
