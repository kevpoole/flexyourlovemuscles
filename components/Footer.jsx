import styles from "../styles/Footer.module.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.body}>
      <a href="https://facebook.com">
        <AiOutlineFacebook size={40} />
      </a>
      <a href="https://youtube.com">
        <AiOutlineYoutube size={40} />
      </a>
      <a href="https://instagram.com">
        <AiOutlineInstagram size={40} />
      </a>
    </div>
  );
};
export default Footer;
