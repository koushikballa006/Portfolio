import { title } from "@/components/primitives";

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className={`${title()} text-5xl font-bold mb-12`}>About Me</h2>
      <div className="max-w-4xl text-center">
        <p className="text-xl leading-relaxed">
        I'm Koushik Balla, a passionate web developer based in Bengaluru. With a strong background in full-stack development, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js). My goal is to create seamless, efficient, and user-friendly web applications that solve real-world problems. In my free time, I enjoy exploring new technologies, coding personal projects, and playing cricket.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
