import footer_wallpaper from '../../../Assets/footer-wallpaper.png'
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.containerPromotion}>
          <img className={styles.gifCinemaIcon} alt="" src={footer_wallpaper} />
          <div className={styles.stayConnected}>
            <div className={styles.stayConnectedForm}>
              <input type="email" className={styles.email} placeholder="Your Email" />
              <div className={styles.underline}></div>
              <button type="submit" className={styles.btnSubmit}>
                <div className={styles.btnSubFrame}></div>
                <div className={styles.text}>Submit</div>
              </button>
            </div>
            <div className={styles.stayConnectedText}>
              <p className={styles.fromCultClassics}>
                From cult classics to modern masterpieces.
              </p>
              <p className={styles.fromCultClassics}>
                Stay updated with the latest movies, news and articles from INDI.
              </p>
              <div className={styles.title}>Stay Connected</div>
            </div>
          </div>
        </div>
      );
}

export default Footer;