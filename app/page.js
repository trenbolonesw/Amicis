import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Amicis
        <Link href="/Home" className={styles.about}>
        About
        </Link>
       
        </h1>
      </header>
     
      <section className={styles.section}>
      <Link href="/"> + Create a Community</Link>
      </section>
      <main className={styles.main}>
      <div className={styles.search}>
        <label>Find your community</label>
          <input type="search" className={styles.input}/>
          <button type="submit" className={styles.button}>Search</button>
        </div>
      </main>
      
    </div>

    </>
  );
}
