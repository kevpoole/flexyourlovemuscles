import Footer from "./Footer";
import MainNav from "./MainNav";
import styles from "../styles/Layout.module.scss";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <video className={styles.video} autoPlay loop muted playsInLine>
        <source src="../clip.webm" type="video/webm" />
      </video>
      <div className={styles.body}>
        <MainNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
