import styles from "../styles/Home.module.scss";
import flyer from "../public/mushrooms.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <div className={styles.main}>
        <a href="https://cincyfringe.com/mushrooms-of-western-kentucky/">
          <Image src={flyer}></Image>
        </a>
      </div>
    </>
  );
}
