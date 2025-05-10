import Image from "next/image";
import styles from "./header.module.css";
import * as motion from "motion/react-client";
import Nav from "@/app/_components/nav";

export default function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ top: "10px", opacity: 0, rotateX: 90 }}
      animate={{ top: "0", opacity: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Image src="/logo.svg" width={128} height={36} alt="website logo" />
      <Nav/>
    </motion.header>
  );
}
