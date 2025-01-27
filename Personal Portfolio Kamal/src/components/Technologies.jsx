import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { FaNodeJs, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800" id="skills">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <TbBrandNextjs className="text-7xl text-neutral-100" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiExpress className="text-7xl text-yellow-400" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <SiBootstrap className="text-7xl text-purple-500" />
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaJava className="text-7xl text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;