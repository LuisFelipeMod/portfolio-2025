import styles from "./page.module.css";
import Header from "./_components/header/header";
import Wave from "./_components/wave/wave";
import Presentation from "./_components/presentation/presentation";

export default function Home() {
  return (
    <>
      <Wave />
      <Header />
      <main className={styles.home_main}>
        <Presentation/>
      </main>
    </>
  );
}
