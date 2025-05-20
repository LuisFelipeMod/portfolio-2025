import TitleAnimation from "../title_animation/title_animation";
import * as motion from "motion/react-client";
import styles from "./skills.module.css";
import Image from "next/image";
import { FaRegLaughBeam } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiReactquery,
  SiReacthookform,
  SiReactrouter,
  SiShadcnui,
  SiNextui,
  SiJquery,
  SiLighthouse,
  SiAmazonapigateway,
  SiGraphql,
  SiPrisma,
  SiNodedotjs,
  SiNestjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className={styles.skills_section} id="skills">
      <div className={styles.skills_box}>
        <TitleAnimation name="Conhecimentos e Habilidades" />
        <motion.div
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
          <div className={styles.aboutMe_actions}>
            <button
              className={`${styles.aboutMe_button} ${styles.aboutMe_button__active}`}
            >
              Front-End
            </button>
            <button className={`${styles.aboutMe_button}`}>Back-End</button>
            <button className={`${styles.aboutMe_button}`}>Mobile</button>
          </div>
        </motion.div>

        <hr className={styles.aboutMe_line} />

        <div className={styles.aboutMe_skills}>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.javascript_icon}`}
          >
            <SiJavascript />
            <p>Javascript</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.typescript_icon}`}
          >
            <SiTypescript />
            <p>Typescript</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.react_icon}`}
          >
            <SiReact />
            <p>React</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.nextjs_icon}`}
          >
            <SiNextdotjs />
            <p>Next.js</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.vuejs_icon}`}
          >
            <SiVuedotjs />
            <p>Vue.js</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.html_icon}`}
          >
            <SiHtml5 />
            <p>HTML 5</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.css_icon}`}
          >
            <SiCss3 />
            CSS 3
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.react_icon}`}
          >
            <SiReact />
            <p>Context API</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.prisma_icon}`}
          >
            <SiPrisma />
            <p>Prisma ORM</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.nodejs_icon}`}
          >
            <SiNodedotjs />
            <p>Node JS</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.nestjs_icon}`}
          >
            <SiNestjs />
            <p>Nest JS</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.styled_icon}`}
          >
            <SiStyledcomponents />
            <p>Styled Components</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.tailwind_icon}`}
          >
            <SiTailwindcss />
            <p>Tailwind CSS</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.bootstrap_icon}`}
          >
            <SiBootstrap />
            <p>Bootstrap</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.sass_icon}`}
          >
            <SiSass />
            <p>Sass</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.api_icon}`}
          >
            <SiAmazonapigateway />
            <p>API Rest</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.graphql_icon}`}
          >
            <SiGraphql />
            <p>GraphQL</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.reactquery_icon}`}
          >
            <SiReactquery />
            <p>React Query</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.reacthook_icon}`}
          >
            <SiReacthookform />
            <p>React Hook Form</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.reactrouter_icon}`}
          >
            <SiReactrouter />
            <p>React Router</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.shadcdn_icon}`}
          >
            <SiShadcnui />
            <p>shadcdn/ui</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.nextui_icon}`}
          >
            <SiNextui />
            <p>Next UI</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.jquery_icon}`}
          >
            <SiJquery />
            <p>JQuery</p>
          </div>
          <div
            className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles.lighthouse_icon}`}
          >
            <SiLighthouse />
            <p>Lighthouse</p>
          </div>

        </div>
      </div>
    </section>
  );
}
