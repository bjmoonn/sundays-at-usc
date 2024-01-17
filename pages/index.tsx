import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // var scroll = document.querySelector(".scroll"),
  // list = document.querySelector(".scrollList"),
  // clone = list.cloneNode(true);

  // scroll.append(clone);

  return (
    <>
      <Head>
        <title>sundays#usc</title>
        <meta name="description" content="sundays@usc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div>sundays@usc</div>
            <div>MENU</div>
          </div>
          <div className={styles.landing}>
            <div className={styles.landingText}>
                Sundays is a home to work on<br />the passions that excite you.
            </div>
            <div className={styles.rsvpButton}>
              RSVP
            </div>
          </div>
          <div className={styles.bigSundays}>
            <img src="images/sundays_white_gold_brighter_3.png" alt="bigSundays"/>
          </div>
          <div className={styles.atUSC}>
            at USC
          </div>
          <div className={styles.scroll}>
            <div className={styles.scrollList}>
              <div className={styles.scrollItem}>
                Dilan and Portia are writing a horror story where 5 frat brothers have to bury a body
              </div>
              <div><img src="images/star.png" alt="star" ></img></div>
              <div className={styles.scrollItem}>
              Joshua is working on Unistart, a key resource for entrepreneurs.
              </div>
              <div><img src="images/star.png" alt="star" ></img></div>
              
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>
              01
            </div>
            <div className={styles.sectionTitle}>
              We meet every Sunday to create whatever it is that makes us feel alive.
            </div>
          </div>
          <div className={styles.sectionDetail}>
            <img className={styles.leftImage} src="images/image_13.png" alt="image_13" ></img>
            <img className={styles.rightImage} src="images/image_4.png" alt="image_4" ></img>
            <img className={styles.floatOne} src="images/smiley_metallic.png" alt="smiley_metallic" ></img>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionNum}>
              02
            </div>
            <div className={styles.sectionTitle}>
            Sundays is a space carved out for deep work, so you can finally work on that project you&apos;ve been <i>itching</i> to start.
            </div>
          </div>
          <div className={styles.cardSection}>
            <img className={styles.floatTwo} src="images/star_metallic.png" alt="star_metallic" ></img>
            <div className={styles.what}>
              What we’ve been working on
            </div>
            <div className={styles.cardScroll}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  Calvin + Aadi
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardTitle}>
                    Kopia
                  </div>
                  <div className={styles.cardDesc}>
                    Virtually try-on items and curate outfits.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  Calvin + Aadi
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardTitle}>
                    Kopia
                  </div>
                  <div className={styles.cardDesc}>
                    Virtually try-on items and curate outfits.
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  Calvin + Aadi
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.cardTitle}>
                    Kopia
                  </div>
                  <div className={styles.cardDesc}>
                    Virtually try-on items and curate outfits.
                  </div>
                </div>
              </div>
            </div>
          <button className={styles.seeAll}>
            See All
          </button>
            
          </div>
          <div className={styles.section}>
            <div className={styles.sectionNum}>
              03
            </div>
            <div className={styles.sectionTitle}>
              This is for the <i>makers</i>, <i>artists</i>, <i>filmmakers</i>, <i>learners</i>, <i>researchers</i>, <i>founders</i>, <i>movers</i>, and <i>shakers</i>.
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
