import styles from "../styles/Lightboxes.module.scss";

const Lightboxes = () => {
  return (
    <div className={styles.body}>
      <h1>Lightboxes For Sale</h1>
      <a href="https://matthewsheltonart.wixsite.com/mysite">
        <button className={styles.btn}>Start Shoppin'</button>
      </a>
    </div>
  );
};
export default Lightboxes;
