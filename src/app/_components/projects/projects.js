import TitleAnimation from "../title_animation/title_animation";
import styles from "./projects.module.css";
import EmblaCarousel from "../embla_carousel";
import { SLIDES, CAROUSEL_OPTIONS } from "@/data/projects";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div>
        <TitleAnimation name="Projetos" />
        <EmblaCarousel slides={SLIDES} options={CAROUSEL_OPTIONS} />
      </div>
    </section>
  );
}
