import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: { order: ["path", "navigator"] },
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          navBar: {
            About: "About",
            Projects: "Projects",
            Light: "Light",
            Dark: "Dark",
            System: "System",
            Resume: "Resume",
            English: "English",
          },
          home: {
            Hello: "Hello There!",
            Name: "I'm",
            Intro:
              "A passionate Web developer, creating amazing web application using React, ExpressJs & MongoDb",
            ProjectButton: "View My Work",
            ContactButton: "Get in Touch",
          },
          about: {
            AboutMe: "About Me",
            Location: "India",
            Paragraph: `
              I am a passionate Web developer from India. My journey in
              web development began with a fascination for how lines of code can
              transform into interactive, beautiful, and functional websites and
              applications. This fascination has grown into a pursuit of
              knowledge and skills across both front-end and back-end
              technologies.`,
            Stacks: "Stacks",
            Tools: "Tools",
          },
          projects: {
            ProjectTitle: "Projects",
            ProjectIntro: "A variety of projects I have worked on.",

            Proj1Title: "Recipe Website",
            Proj1Description:"The Recipe website showcases a single, detailed recipe page that highlights the ingredients, preparation steps, and an image of the dish. The site is designed with simplicity and clarity in mind, using HTML and CSS to deliver a visually appealing and functional experience",
            
            Proj2Title: "BMI Calculator",
            Proj2Description: "Body Mass Index (BMI) based on their weight and height. The calculator uses HTML for the structure, CSS for styling, and JavaScript to perform the calculations and display the results dynamically. This project provides a user-friendly interface where users can input their data, see their BMI, and get a health status classification based on the BMI value",
            
            Proj3Title: "E-Commerce",
            Proj3Description:"This Full-Stack E-Commerce web-app is a robust online shopping platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The project aims to provide a seamless and dynamic shopping experience, offering users a comprehensive set of features such as product browsing, shopping cart management, user authentication, and order management. The backend and frontend are tightly integrated, ensuring a smooth user experience and efficient operations.",
            
            githubAvailable: "View on GitHub",
            liveAvailable: "View live site",
          },
          contact: {
            contactTitle: "Get in Touch",
            contactIntro:
              "Whether you're interested in discussing a job opportunity, have a project in mind, or just want to say hello, feel free to drop me a message using the form below. I'd love to connect!",
            namePlaceHolder: "Your Name",
            nameError: "Name must be at least 3 characters.",
            emailPlaceHolder: "Your Email",
            emailError: "Please enter a valid email address.",
            messagePlaceHolder: "Your Message",
            messageError: "Please provide a message with at least 3 words.",
            sendMsgButton: "Send Message",
          },
          footer: {
            Home: "Home",
            About: "About",
            Projects: "Projects",
            SourceCode: "Source Code",
            Resume: "Resume",
            endPhrase: "Designed & Developed by Prasanth Mani",
          },
        },
      },
    },
  });
