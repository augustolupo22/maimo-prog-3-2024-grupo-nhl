import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import CardsGrid from "./components/CardsGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <CardsGrid />
      <Footer />
    </main>
  );
}