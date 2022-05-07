import Head from "next/head";
import styles from "../styles/HeroSection.module.css";
import Ticket from "../components/ticket";

export default function Main() {
	return (
    <>
      <div class={styles.container}>
        <Head>
          <title>Cultura 2022</title>
          <meta name="description" content="CMRIT Cultura 2022" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sancreek&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
      </div>
      <Ticket />
    </>
  );
}
