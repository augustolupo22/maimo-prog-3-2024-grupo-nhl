import styles from "@/app/page.module.css";
import CardsGrid from "@/app/components/CardsGrid/CardsGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardsGrid />
    </main>
  );
}