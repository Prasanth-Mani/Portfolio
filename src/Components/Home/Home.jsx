import styles from "./Home.module.css";
import devPic from "../../assets/devPicture.webp";
import { motion } from "framer-motion";
import { handleSmoothClick } from "../Navbar/SmoothClick";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";
import { useTranslation } from "react-i18next";

function Home() {
  const isDark = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={styles.home}>
      <Reveal
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className={styles.content}>
          <p>{t("home.Hello")}</p>
          <h2 data-theme={isDark ? "Dark" : "Light"}>
            {t("home.Name")} <span className={styles.name}>Prasanth Mani</span>
          </h2>
          <p
            className={styles.description}
            data-theme={isDark ? "Dark" : "Light"}
          >
            {t("home.Intro")}
          </p>
          <div className={styles.skills} data-theme={isDark ? "Dark" : "Light"}>
            <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              React
            </motion.span>
            <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              ExpressJs
            </motion.span>
            <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              JavaScript
            </motion.span>
            <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              MongoDb
            </motion.span>
            <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              HTML/CSS
            </motion.span>
          </div>
          <div
            className={styles.linkBtns}
            data-theme={isDark ? "Dark" : "Light"}
          >
            <a
              href="#Projects"
              onClick={handleSmoothClick("Projects")}
              className={styles.button}
            >
              {t("home.ProjectButton")}
            </a>
            <a
              href="#Contact"
              onClick={handleSmoothClick("Contact")}
              className={styles.button}
            >
              {t("home.ContactButton")}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className={styles.imageContainer}>
          <img src={devPic} alt="Developer" />
        </div>
      </Reveal>
    </div>
  );
}

export default Home;
