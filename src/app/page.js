import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import CardsGrid from "./components/CardsGrid/CardsGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CardsGrid
       className={styles.main}
      />
    </main>
  );
}
