import TitleAnimation from "../title_animation/title_animation";
import styles from "./index.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function Contact() {
  return (
    <section id="contacts">
      <div>
        <TitleAnimation name="Contatos" id="contacts" />
        <p className={styles.contact_desc}>
          Estou sempre aberto a boas conversas e novas oportunidades! <br></br>
          Se quiser trocar uma ideia, é só me chamar no whatsapp:{" "}
          <a href="https://api.whatsapp.com/send?phone=5514998084367">
            (14) 99808-4367
          </a>{" "}
          ou pelo meu e-mail:{" "}
          <a href="mailto:luisgmodesto12@gmail.com">luigmodesto12@gmail.com</a>
        </p>
        <div className={styles.contact_button__box}>
          <motion.a
            href="https://www.linkedin.com/in/luisfelipegm/"
            target="_blank"
            className={`${styles.contact_button} button`}
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
            className={`${styles.contact_button} button`}
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
