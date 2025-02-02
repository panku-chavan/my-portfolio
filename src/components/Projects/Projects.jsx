import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import crypto from "../../Assets/Projects/crypto.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";
import getYTS from "../../Assets/Projects/getYTS.png";
import myPlan from "../../Assets/Projects/myPlan.png";
import ecom from "../../Assets/Projects/ecom.jpg";
import textToVoice from "../../Assets/Projects/text-to-voice.png";
import moviex from "../../Assets/Projects/moviex.png";
import shoppo from "../../Assets/Projects/shoppo.png";
import shopcart from "../../Assets/Projects/shopcart (1).png";
import bulkemail from "../../Assets/Projects/bulk-email.png";
import shopsy from "../../Assets/Projects/shopsy.png";
import searchnapply from "../../Assets/Projects/searchandapply.png";

const projectData = [
  {
    imgPath: searchnapply,
    title: "Searchandapply.io",
    description:"SearchAndApply.io is an innovative job application platform designed to help users streamline their job search journey. With a user-friendly interface, job seekers can create personalized accounts, track applications, and receive expert guidance to land their dream jobs. SearchAndApply.io empowers you with the tools and insights needed to achieve your career goals efficiently.",
    ghLink: "https://github.com/panku-chavan/searchandapply",
    demoLink: "https://searchandapply.vercel.app/",
  },
  {
    imgPath: shopsy,
    title: "Shopsy",
    description:"Shopsy is a frontend-only e-commerce application developed using React and Tailwind CSS. Instead of relying on external APIs, all product images are stored locally in the assets folder, ensuring a seamless and efficient browsing experience. The application showcases an elegant and responsive design, highlighting the power of modern web development tools.",
    ghLink: "https://github.com/panku-chavan/shopsy",
    demoLink: "https://shopsy-ecru.vercel.app/",
  },
  {
    imgPath: bulkemail,
    title: "Bulk Email Sender",
    description:
      "The Bulk Email Sender is a MERN stack application designed to simplify sending job applications or bulk emails. Users can upload a CSV file with email addresses and send personalized emails simultaneously. This is private and personal application I've developed for avoiding sending mail again and again. Its intuitive interface ensures a smooth user experience for managing bulk email campaigns.",
    ghLink: "https://github.com/panku-chavan/bulk-email-app-frontend",
    demoLink: "https://bulk-email-app-frontend.vercel.app/",
  },
  {
    imgPath: shopcart,
    title: "ShopCart",
    description:
      "Developing a personal e-commerce application for practice, ShopCart, using Next.js for the frontend and Fakestore API for the backend. Utilized Tailwind CSS to create a responsive, mobile-friendly UI and implemented Redux Toolkit for efficient state management, ensuring a seamless user experience.",
    ghLink: "https://github.com/panku-chavan/shopcart",
    demoLink: "https://shopcart-murex.vercel.app/",
  },
  // Add the rest of your project data here
  {
    imgPath: shoppo,
    title: "ShopO",
    description:
      "A personal MERN stack project showcasing a fully functional ecommerce platform. Developed using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. Implemented Stripe API for secure payment processing. Styled using Tailwind CSS, ensuring a responsive and modern UI. Integrated Redux Toolkit for efficient state management and seamless user experience.",
    ghLink: "https://github.com/panku-chavan/shopO",
    demoLink: "https://shop-o.onrender.com/",
  },
  {
    imgPath: crypto,
    title: "Cryptocurrency Dashboard",
    description:
      "A crypto dashboard is a digital platform that lives on a website or an app (either desktop or mobile). Its primary function is to track your cryptocurrency accounts and coins and monitor their historical prices and current values so that you can manage both your crypto assets and related financial plans accordingly.",
    ghLink: "https://github.com/panku-chavan/crypto_dashboard",
    demoLink: "https://panku-chavan.github.io/crypto_dashboard/",
  },
  {
    imgPath: moviex,
    title: "MovieX",
    description:
      "Displaying popular movies: When you visit the home page, the app sends a request to the TMDB API to fetch a list of popular movies. The response is then used to display the movie titles and overviews on the page. Browse popular movies: Users can visit the home page of the app to browse through a list of popular movies.",
    ghLink: "https://github.com/panku-chavan/MovieX",
    demoLink: "https://movie-x-nu.vercel.app/",
  },
  {
    imgPath: flashcard,
    title: "Flashcard Generator",
    description:
      "This is a Single Page application created using ReactJs. All responsive design are developed using TailwindCss framework. React icons also used. In this app user can make a flashcard as per there information. This project has three pages CreateFlashcard, MyFlashcard and last FlashcardDetails Page.",
    ghLink: "https://github.com/panku-chavan/flashcard-generator",
    demoLink: "https://flashcard-generator-15e43.web.app//",
  },
  {
    imgPath: ecom,
    title: "E-Commerce",
    description:
      "This is an e-commerce website. This is a Full stack web application or a MERN stack web application same as common e-commerce websites. In this app user can buy products online. This project also has admin as well as user dashboards, so shop owners who are admins can add products and categories. Both front and backend work properly.",
    ghLink: "https://github.com/panku-chavan/e-commerce-app-2023",
    demoLink: "https://ruby-tasty-coyote.cyclic.app/",
  },
  {
    imgPath: resumeBuilder,
    title: "Resume Builder",
    description:
      "In this app user can make their resume by simply adding their information and download their resume in PDF format. This is a simple react app. The whole app is developed with ReactJs, React hooks, Designed with React bootstrap, and manage the state using React Redux. This is also a Single Page application SPA.",
    ghLink: "https://github.com/panku-chavan/resume-builder",
    demoLink: "https://panku-chavan.github.io/resume-builder/",
  },
  {
    imgPath: myportfolio,
    title: "My Portfolio",
    description:
      "This is my portfolio app. I made this app using create-react-app. I designed this app using the bootstrap framework. This is a responsive app. In this app, I tried to explain myself in brief. I have added my resume and all information about me. I added all my projects or recent work also.",
    ghLink: "https://github.com/panku-chavan/my-portfolio",
    demoLink: "https://panku-chavan.github.io/my-portfolio/",
  },
  {
    imgPath: calc,
    title: "Simple Calculator",
    description:
      "This is a Simple React App. This is a plain CSS project. All Mathematical operations work properly. Simple Calculator helps users to calculate simple calculations with great speed and accessibility. This makes it the best solution for quick and simple calculations.",
    ghLink: "https://github.com/panku-chavan/simple-calculator",
    demoLink: "https://panku-chavan.github.io/simple-calculator/",
  },
  {
    imgPath: getYTS,
    title: "Get YouTube Subscribers",
    description:
      "This is a node express app. This is an API to get YouTube subscribers details. There are four API endpoints in this app, '/ ' default route, '/subscribers' route , '/subscribers/names' route, '/subscribers/:id' route. for more details about this app please read the README.md.",
    ghLink: "https://github.com/panku-chavan/get-youtube-subscribers",
    demoLink: "https://get-youtube-subscribers-one.vercel.app/",
  },
  {
    imgPath: myPlan,
    title: "My Plan",
    description:
      "This is a mini project for creating our daily plans. Like what can I do today or something else. This is a Front-end project using react and bootstrap. This app is live on GitHub pages.",
    ghLink: "https://github.com/panku-chavan/my-plan",
    demoLink: "https://panku-chavan.github.io/my-plan/",
  },
  {
    imgPath: textToVoice,
    title: "Text to Voice Converter",
    description:
      "This is a mini project for changing text to voice. Like user can enter any text, word, sentence and simply enter the speak button and listen to it and enjoy it. This app is live on GitHub pages.",
    ghLink: "https://github.com/panku-chavan/text-to-voice-converter",
    demoLink: "https://panku-chavan.github.io/text-to-voice-converter/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
