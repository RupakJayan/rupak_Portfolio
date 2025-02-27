import React, { useEffect, useState } from "react";

const SwirlCursor = () => {
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrailPos({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="swirl-cursor"
        style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}
      />
    </>
  );
};

export default SwirlCursor;
