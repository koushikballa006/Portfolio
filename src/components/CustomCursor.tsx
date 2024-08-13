// src/components/CustomCursor.tsx
import React, { useEffect, useState } from "react";
import styles from "../styles/CustomCursor.module.css";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default CustomCursor;
