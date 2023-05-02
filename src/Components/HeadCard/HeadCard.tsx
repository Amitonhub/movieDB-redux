import React from "react";
import styles from "./HeadCard.module.css";
import Carousel from "react-bootstrap/Carousel";

export default function HeadCard() {
  return (
    <>
      <Carousel className={styles.heroContainer} interval={2000}>
        <Carousel.Item>
          <img
            className={`${styles.headImage} d-block w-100`}
            src="https://images3.alphacoders.com/104/1041825.jpg"
            alt="First slide"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={`col-sm-12 col-md-8`}>
                <div className={styles.mainTitle}>JOKER</div>
                <div className={styles.filmInfo}>
                  Crime, Drama, thriller | 2019 | 132 Min.
                </div>
                <div className={styles.filmAbout}>
                  <p className={styles.fromCultClassics}>
                    The rise of Arthur Fleck, from aspiring
                  </p>
                  <p
                    className={styles.fromCultClassics}
                  >{`stand-up comedian and pariah to Gotham's clown `}</p>
                  <p className={styles.fromCultClassics}>
                    prince and leader of the revolution.
                  </p>
                </div>
                <div className={styles.filmCredits}>
                  <p className={styles.fromCultClassics}>
                    Director: Todd Phillips
                  </p>
                  <p className={styles.fromCultClassics}>
                    Cast: Joaquin Phoenix, Robert De Niro, Zazie Beetz
                  </p>
                </div>
              </div>
              <div className={`${styles.colSm12} ${styles.colMd4}`}>
                <div className={styles.btnWatch}>
                  <div className={styles.btnBack} />
                  <div className={styles.watchNow}>Watch Now</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.headImage} d-block w-100`}
            src="https://wallpapercave.com/wp/wp5387986.jpg"
            alt="First slide"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={`col-sm-12 col-md-8`}>
                <div className={styles.mainTitle}>DEADPOOL</div>
                <div className={styles.filmInfo}>
                  Action, Comedy | 2016 | 89 Min.
                </div>
                <div className={styles.filmAbout}>
                  <p className={styles.fromCultClassics}>
                    A wisecracking mercenary gets experimented
                  </p>
                  <p
                    className={styles.fromCultClassics}
                  >{`on and becomes immortal but ugly, `}</p>
                  <p className={styles.fromCultClassics}>
                    and sets out to track down the man who ruined his looks.
                  </p>
                </div>
                <div className={styles.filmCredits}>
                  <p className={styles.fromCultClassics}>
                    Director: Tim Miller
                  </p>
                  <p className={styles.fromCultClassics}>
                    Cast: Ryan Reynolds, Karan Soni, Ed Skrein
                  </p>
                </div>
              </div>
              <div className={`${styles.colSm12} ${styles.colMd4}`}>
                <div className={styles.btnWatch}>
                  <div className={styles.btnBack} />
                  <div className={styles.watchNow}>Watch Now</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.headImage} d-block w-100`}
            src="https://www.xtrafondos.com/wallpapers/resoluciones/21/the-batman-2022_2560x1440_7652.jpg"
            alt="First slide"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={`col-sm-12 col-md-8`}>
                <div className={styles.mainTitle}>THE BATMAN</div>
                <div className={styles.filmInfo}>
                  Action, Crime, Drama | 2022 | 154 Min.
                </div>
                <div className={styles.filmAbout}>
                  <p className={styles.fromCultClassics}>
                    When a sadistic serial killer begins murdering key political
                  </p>
                  <p
                    className={styles.fromCultClassics}
                  >{`figures in Gotham, Batman is forced to investigate the city's hidden `}</p>
                  <p className={styles.fromCultClassics}>
                    corruption and question his family's involvement.
                  </p>
                </div>
                <div className={styles.filmCredits}>
                  <p className={styles.fromCultClassics}>
                    Director: Matt Reeves
                  </p>
                  <p className={styles.fromCultClassics}>
                    Cast: Robert Pattinson, Zoë Kravitz, Jeffrey Wright
                  </p>
                </div>
              </div>
              <div className={`${styles.colSm12} ${styles.colMd4}`}>
                <div className={styles.btnWatch}>
                  <div className={styles.btnBack} />
                  <div className={styles.watchNow}>Watch Now</div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
