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
          <motion.div
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
            <p>
              Olá! Eu sou o Luis Felipe, um Desenvolvedor Front-End Pleno com 3
              anos de experiência apaixonado por transformar ideias em
              interfaces digitais intuitivas e de alta performance. Minha
              jornada na programação começou com o desejo de construir soluções
              que realmente façam a diferença, e desde então tenho me
              aprofundado em tecnologias como React, Next.js, TypeScript e
              GraphQL.
            </p>
            <p>
              Sou um eterno aprendiz e sempre busco novos desafios. Embora meu
              foco principal seja Front-End, tenho um grande interesse em
              expandir minhas habilidades para o universo Fullstack e Mobile
              (especialmente com Flutter), buscando sempre as melhores práticas
              e soluções escaláveis.
            </p>
            <p>
              Quando não estou codando, gosto de ouvir música e jogar videogame.
              Acredito que o melhor código nasce da curiosidade, da colaboração
              e de uma boa pausa no tempo livre para recarregar as energias!
            </p>
            <p>
              Se você busca um desenvolvedor proativo, que assume
              responsabilidades e adora ver o impacto real do seu trabalho,
              ficarei feliz em conectar e conversar sobre como posso contribuir
              com seus projetos!
            </p>
          </motion.div>

          <motion.a
            className="button"
            href="https://drive.google.com/drive/folders/1Z8gFWfJcKTl3iMZAipcWCWJ8bs9GFz9w?usp=sharing"
            target="_blank"
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
        <Image src="/sobre_mim.png" width={384} height={256} alt=""></Image>
      </div>
    </section>
  );
}
