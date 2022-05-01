import Head from "next/head";
import styles from "../styles/Home.module.css";
import Event from "../components/event";
import { Guest } from "../components/Guest";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/homepage";

export default function Main() {
	return (
		<>
			<div className={styles.container}>
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
			<HeroSection />
			<Event />
			<Guest />
			<About />
			<Footer />
		</>
	);
}
