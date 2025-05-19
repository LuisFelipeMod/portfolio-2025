import styles from "./page.module.css";
import Header from "./_components/header/header";
import Wave from "./_components/wave/wave";
import Presentation from "./_components/presentation/presentation";
import AboutMe from "./_components/about_me/about_me";
import Skills from "./_components/skills/skills";
import Projects from "./_components/projects/projects";
import Trajectory from "@/app/_components/trajectory";
import Contacts from "@/app/_components/contacts";

export default function Home() {
  return (
    <>
      <Wave />
      <Header />
      <main className={styles.home_main}>
        <Presentation />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Trajectory /> */}
        <Contacts/>
      </main>
    </>
  );
}
