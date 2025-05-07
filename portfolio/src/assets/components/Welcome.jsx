import { motion } from "framer-motion";

export const Welcome = () => {
    return (
      <div className="bg-indigo-200 bg-opacity-30 rounded-2xl shadow-2xl p-8 max-w-screen-2xl flex flex-col items-start">
        <motion.div className="text-5xl font-extrabold leading-snug"
        initial={{
            opacity: 0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
            transition={{
            duration: 1,
            delay: 0.5,
        }}>
        Hi, I'm
        <br />
        <span className="px-1 italic text-indigo-600">Brandon!</span>
        </motion.div>
        <motion.div className="text-lg text-gray-800 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        I'm currently a final semester 
        <br />Computer Science Student at HTW Berlin.
      </motion.div>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16 mx-auto`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        View Portfolio
      </motion.button>
      </div>
    );
  };
  