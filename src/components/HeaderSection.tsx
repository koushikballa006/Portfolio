// components/HeaderSection.tsx
import React from "react";
import { title } from "@/components/primitives";

const HeaderSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-16 px-4 md:py-32 md:px-10">
      <div className="max-w-4xl text-left">
        <h1
          className={`${title()} font-bold leading-tight`}
          style={{ fontSize: "5rem" }}
        >
          Hi, I'm&nbsp;
        </h1>
        <h1
          className={`${title({ color: "violet" })} font-bold leading-tight`}
          style={{ fontSize: "5rem" }}
        >
          Koushik Balla
        </h1>
        <br />
        <h1
          className={`${title()} font-bold leading-tight`}
          style={{ fontSize: "5rem" }}
        >
          a passionate&nbsp;
        </h1>
        <h1
          className={`${title({ color: "violet" })} font-bold leading-tight`}
          style={{ fontSize: "5rem" }}
        >
          Web Developer
        </h1>
      </div>
    </section>
  );
};

export default HeaderSection;
