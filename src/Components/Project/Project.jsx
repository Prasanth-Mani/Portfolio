import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";


import { CarouselContext } from "../../Context/CarouselContext"

import proj1Image1 from "../../assets/project1/proj1S1.webp";
import proj1Image2 from "../../assets/project1/proj1S2.webp";
import proj1Image3 from "../../assets/project1/proj1S3.webp";


import proj2Image1 from "../../assets/project2/proj2S1.webp";

import proj3Image1 from "../../assets/project3/proj3S1.webp";
import proj3Image2 from "../../assets/project3/proj3S2.webp";
import proj3Image3 from "../../assets/project3/proj3S3.webp";



import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Reveal } from "../Utils/Reveal";
import { useTranslation } from "react-i18next";



function Project() {

 const isDark = useContext(ThemeContext); 

  const proj1Imgs = [
    proj1Image1,
    proj1Image2,
    proj1Image3,
  ];

  const proj2Imgs = [proj2Image1];
  const proj3Imgs = [proj3Image1,proj3Image2,proj3Image3];
  
  const {t}=useTranslation();

  return (
    
    <div className={styles.projectfunc} id="Projects">
      <Reveal><p className={styles.pTitle}>{t('projects.ProjectTitle')}</p>
      <p className={styles.smallTitle} data-theme={isDark ? "Dark" : "Light"}>{t('projects.ProjectIntro')}</p></Reveal>
      
      <div className={styles.project}>
        <CarouselContext.Provider value={proj1Imgs}>
          <ProjectCard
            imageSrc={proj1Image1}
            projName={t('projects.Proj1Title')}
            projDescription={t('projects.Proj1Description')}
            githubLink={"https://github.com/Prasanth-Mani/Project_html"}
            externalLink={"https://project-html-iota.vercel.app/"}
          />{" "}
        </CarouselContext.Provider>

        <CarouselContext.Provider value={proj2Imgs}>
          <ProjectCard
            imageSrc={proj2Image1}
            projName={t('projects.Proj2Title')}
            projDescription={t('projects.Proj2Description')}
            githubLink={"https://github.com/Prasanth-Mani/Project_js"}
            externalLink={"https://project-js-sandy.vercel.app/"}
          />{" "}
        </CarouselContext.Provider>

        <CarouselContext.Provider value={proj3Imgs}>
        <ProjectCard 
         imageSrc={proj3Image1}
         projName={t('projects.Proj3Title')}
         projDescription={t('projects.Proj3Description')}
         githubLink={"https://github.com/Prasanth-Mani/e-commerce_frontend"}
         externalLink={"https://e-commerce-frontend-bay-three.vercel.app/"}
       />{" "}
       </CarouselContext.Provider>
        
      </div>
    </div>

  );
}

export default Project;
