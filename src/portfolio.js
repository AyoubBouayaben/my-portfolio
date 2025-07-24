import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: false
};

const greeting = {
  username: "Ayoub",
  title: "Ayoub Bouayaben",
  subTitle:
    "Research associate specialized in flight delay prediction using machine learning. I offer predictive and interpretability services for airlines and aviation companies.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ayoub-bouayaben-798097280/",
  gmail: "ayoub.bouayaben@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Skills",
  subTitle: "Tools and technologies I use in my daily work",
  skills: [
    emoji("⚡ Flight delay prediction using machine learning"),
    emoji("⚡ Optimization models to support airline disruption management"),
    emoji("⚡ Developing Python-based APIs and data pipelines"),
    emoji("⚡ Explaining models with SHAP and building quantile regression pipelines")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-database" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "TU Dresden, Germany",
      subHeader: "PhD in Machine Learning for Aviation",
      duration: "2021 – Present",
      desc: "Focus on predictive models and optimization to solve delay propagation problems"
    },
    {
      schoolName: "University of Potsdam, Germany",
      subHeader: "Master of Science in Mathematics",
      duration: "2018 – 2021"
    },
    {
      schoolName: "University of Sidi Mohamed Ben Abdellah, Morocco",
      subHeader: "Bachelor of Science in Mathematics",
      duration: "2013 – 2016"
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Machine Learning", progressPercentage: "85%" },
    { Stack: "Backend/API Development", progressPercentage: "70%" },
    { Stack: "Data Analysis", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Associate",
      company: "TU Dresden",
      date: "2021 – Present",
      desc: "Developing predictive ML models for flight delays and integrating them into airline decision support tools."
    },
    {
      role: "SAP PLM Developer",
      company: "Gramont, Berlin",
      date: "2019 – 2020",
      desc: "Worked on SAP system development and technical solution integration for product lifecycle management."
    }
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "If you’d like to test the flight delay prediction API or ask about my services, feel free to reach out.",
  email_address: "ayoub.bouayaben@gmail.com",
  formLink: "https://formspree.io/f/mpwlpbda",
  display: true
};

// Optional Sections (currently hidden)
const openSource = { showGithubProfile: "false", display: false };
const bigProjects = { display: false };
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { userName: "", display: false };
const isHireable = false;
const serviceSection = { display: true };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  resumeSection,
  contactInfo,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  isHireable,
  serviceSection
};

