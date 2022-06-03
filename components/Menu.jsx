import styles from "../styles/Menu.module.scss";
import Link from "next/link";
const Menu = ({ setShowMenu }) => {
  return (
    <>
      <div className={styles.navlinks} onClick={() => setShowMenu(false)}>
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
    </>
  );
};
export default Menu;
