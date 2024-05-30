import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import CardsGrid from "./components/CardsGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <CardsGrid/>
    </main>
  );
}
