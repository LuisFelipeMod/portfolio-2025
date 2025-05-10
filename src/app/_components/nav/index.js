"use client";

import styles from "./index.module.css";
import * as motion from "motion/react-client";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

export default function Nav() {
  const handleHover = { opacity: "0.5" };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_box}>
        <motion.a
          whileHover={handleHover}
          href="#about_me"
          className={styles.nav_item}
        >
          Sobre mim
        </motion.a>
        <motion.a
          whileHover={handleHover}
          href="#skills"
          className={styles.nav_item}
        >
          Habilidades
        </motion.a>
        <motion.a
          whileHover={handleHover}
          href="#projects"
          className={styles.nav_item}
        >
          Projetos
        </motion.a>
        <motion.a
          whileHover={handleHover}
          href="#trajectory"
          className={styles.nav_item}
        >
          Trajetória
        </motion.a>
        <motion.a
          whileHover={handleHover}
          href="#contact"
          className={styles.nav_item}
        >
          Contato
        </motion.a>
      </div>
      <div className={styles.nav_box__mobile}>
        <button
          onClick={() =>
            isDropdownVisible
              ? setDropdownVisible(false)
              : setDropdownVisible(true)
          }
          className={styles.nav_box__menu}
        >
          <CgMenuRight />
        </button>
        {isDropdownVisible ? (
          <div
            className={styles.nav_dropdown}
            onClick={() => isDropdownVisible ? setDropdownVisible(false) : null}
          >
            <div
              className={styles.nav_dropdown__background}
            ></div>
            <div className={styles.nav_dropdown__content}>
              <motion.a
                whileHover={handleHover}
                href="#about_me"
                className={styles.nav_item}
              >
                Sobre mim
              </motion.a>
              <motion.a
                whileHover={handleHover}
                href="#skills"
                className={styles.nav_item}
              >
                Habilidades
              </motion.a>
              <motion.a
                whileHover={handleHover}
                href="#projects"
                className={styles.nav_item}
              >
                Projetos
              </motion.a>
              <motion.a
                whileHover={handleHover}
                href="#trajectory"
                className={styles.nav_item}
              >
                Trajetória
              </motion.a>
              <motion.a
                whileHover={handleHover}
                href="#contact"
                className={styles.nav_item}
              >
                Contato
              </motion.a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
