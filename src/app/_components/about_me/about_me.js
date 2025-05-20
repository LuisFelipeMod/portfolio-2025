import TitleAnimation from "../title_animation/title_animation";
import * as motion from "motion/react-client";
import styles from "./about_me.module.css";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className={styles.aboutme_section} id="about_me">
      <div>
        <div className={styles.aboutme_box}>
          <TitleAnimation name="Sobre mim" />
          <motion.p
            className="desc"
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
            Meu nome é Luis Felipe, tenho 20 anos e moro em Marília, São Paulo.
            Sou uma pessoa criativa, persistente e altruísta. Além de programar,
            sou apaixonado por música e tenho um gosto bastante eclético —
            minhas playlists variam entre rock, blues e até mesmo música
            clássica.
          </motion.p>

          <motion.a
            className="button"
            href="/Luis Felipe Gonçalves Modesto - CV.pdf"
            download
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
            <FaFilePdf />
            Baixar CV
          </motion.a>
        </div>
        <Image src="/foto.png" width={286} height={261} alt=""></Image>
      </div>
    </section>
  );
}
