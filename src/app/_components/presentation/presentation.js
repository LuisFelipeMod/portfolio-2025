import styles from "./presentation.module.css";
import * as motion from "motion/react-client";
import { FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";
import TitleAnimation from "@/app/_components/title_animation/title_animation";

export default function Presentation() {
  return (
    <section className={styles.presentation_section}>
      <div>
        <div className={styles.presentation_box}>
          <TitleAnimation name="Luis/Felipe/C. Modesto" />
          <motion.p
            className={styles.presentation_desc}
            initial={{
              top: "10px",
              opacity: 0,
              rotateX: 90,
            }}
            animate={{
              top: "0",
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            Sou desenvolvedor especializado em front-end apaixonado pela área
            tech. Estudo programação desde 2019 e possuo mais de 3 anos de
            experiência profissional.
          </motion.p>
          <motion.button
            className={`${styles.presentation_button} button`}
            initial={{
              top: "10px",
              opacity: 0,
              rotateX: 90,
            }}
            animate={{
              top: "0",
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            <FaArrowDown />
            Quem é o Luis?
          </motion.button>
        </div>
        <div
          className={`${styles.presentation_box} ${styles.presentation_socials}`}
        >
          <motion.a
            href="https://www.linkedin.com/in/luisfelipegm/"
            target="_blank"
            className={`${styles.presentation_button} button`}
            initial={{
              top: "10px",
              opacity: 0,
              rotateX: 90,
            }}
            animate={{
              top: "0",
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://github.com/LuisFelipeMod"
            target="_blank"
            className={`${styles.presentation_button} button`}
            initial={{
              opacity: 0,
              rotateX: 90,
            }}
            animate={{
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
