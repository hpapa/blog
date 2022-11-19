import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Button from "../components/Common/Button";
import styled from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ButtonContainer = styled.div`
  margin: 50px;
`;


export default function Home() {
  const router = useRouter();

  const handleRoutePush = (url = "") => {
    router.push(url);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hpapa blog</title>
        <meta name="description" content="Hpapa の技術メモ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hpapa blog
        </h1>
        <ButtonContainer>
          <Button text="Enter" onClick={() => handleRoutePush("/test")} style={{ width: 200 }} />
        </ButtonContainer>
      </main>

      <footer className={styles.footer}>
        Hpapa blog
      </footer>
    </div>
  )
}
