import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout title="Lachlan Newman">
      <main className={styles.hero}>
        <img src="/img/me.jpeg" alt="Lachlan Newman" className={styles.photo} />
        <h1 className={styles.name}>Lachlan Newman</h1>
      </main>
    </Layout>
  );
}
