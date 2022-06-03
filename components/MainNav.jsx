import styles from "../styles/MainNav.module.scss";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Menu from "./Menu";

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.body}>
        <div className={styles.logo}>
          <Link href="/">
            <h2>Flex Your Love Muscles</h2>
          </Link>
        </div>
        <div className={styles.navlinks}>
          <Link href="/music">Music</Link>
          <Link href="/cv">CV</Link>
          <Link href="/lightboxes">Lightboxes</Link>
          <Link href="/women-and-kitties">Women and Kitties</Link>
          <Link href="/blacklight-music-series">Blacklight Music Series</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/video-work">Video Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/friends">Friends</Link>
        </div>
      </div>
      <div className={styles.mobileHeader}>
        <Link href="/">
          <h3>flex your love muscles</h3>
        </Link>

        <AiOutlineMenu size={30} onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </>
  );
};
export default MainNav;
