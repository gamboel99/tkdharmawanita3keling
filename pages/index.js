import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TK Dharmawanita III Desa</title>
        <meta name="description" content="Website TK Dharmawanita III" />
      </Head>

      <main>
        <section className={styles.hero}>
          <h1>Selamat Datang di TK Dharmawanita III</h1>
          <p>Tempat bermain dan belajar yang menyenangkan!</p>
        </section>

        <section className={styles.links}>
          <div className={styles.linkCard}>
            <h3>Profil Sekolah</h3>
            <p>Kenali lebih dekat TK kami</p>
          </div>
          {/* Tambahkan card lainnya */}
        </section>
      </main>
    </div>
  );
}
