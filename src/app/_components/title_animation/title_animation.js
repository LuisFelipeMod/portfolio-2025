import styles from "./title_animation.module.css";
import * as motion from "motion/react-client";

// use '/' in props name to breakline

export default function TitleAnimation(props) {
  const name = props.name;
  const words = name.split("/");

  return (
    <h1 className={styles.title}>
      {words.map((word, idx) => (
        <span key={idx} className={styles.title_word}>
          <span className={styles.title_letter}>
            {word.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                style={{ position: 'relative' }}
                initial={{ top:'10px' ,textShadow: '0px 0 0px rgba(243, 243, 243, 0.3)', opacity: 0, rotateX: 90 }}
                animate={{ top: '0' ,textShadow: '0px 7px 0px rgba(243, 243, 243, 0.3)', opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}
