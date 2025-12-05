import TitleAnimation from "../title_animation/title_animation";
import * as motion from "motion/react-client";
import styles from "./skills.module.css";
import { skillsData } from "@/data/skills";

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
          {skillsData.map(({ name, Icon, styleClass }) => (
            <div
              key={name}
              className={`${styles.aboutMe_skills__item} ${styles.unable_icon} ${styles[styleClass]}`}
            >
              <Icon />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
