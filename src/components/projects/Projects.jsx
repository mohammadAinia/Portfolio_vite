import './projects.scss'
import React from 'react'; // Make sure React is imported
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      "id": 1,
      "title": "WhatsApp AI Chatbot",
      "description": "Developed an AI-powered WhatsApp chatbot using OpenAI's ChatGPT and the WhatsApp Business API to automate customer support. The solution reduced response times by 60% and handled 80% of inquiries autonomously, significantly improving operational efficiency. Implemented NLP-driven, context-aware interactions with real-time webhook integration for seamless communication. Leveraged MongoDB for secure storage of conversation histories and user data, enabling analytics and persistent context across chats.",
      "technologies": ["Node.js", "Express.js", "WhatsApp Business API", "OpenAI API (ChatGPT)", "MongoDB"],
      "images": [
        "assets/whatsapp.jpg",
        "assets/whatsimage.png",
      ],
      "link": "#"
    },
    {
      id: 2,
      title: "PetCare Platform",
      description: "A comprehensive platform connecting pet owners with veterinarians, featuring appointment booking, vaccine reminders, and an integrated pet supply store. The system enables doctors to monitor pets' health while providing owners with convenient access to veterinary services and essential pet products through automated notifications and clinic browsing capabilities.",
      technologies: ["React.js", "Node.js", "MySQL", "Figma"],
      images: [
        "assets/petcare.png",
        "assets/petcare2.png",
        // "assets/petcare3.png", // Consider adding pet-related images
        // "assets/petcare4.png"
      ],
      features: [
        "Veterinarian appointment booking system",
        "Vaccination reminder notifications",
        "Pet health monitoring dashboard",
        "Integrated e-commerce for pet supplies",
        "Clinic and doctor search functionality"
      ],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Developed a full-stack AI chat application inspired by ChatGPT, leveraging Google’s Gemini model for intelligent, context-aware responses. Designed an intuitive and responsive React.js frontend with real-time messaging, ensuring a seamless user experience. Built a scalable backend using Node.js & Express.js, handling API requests efficiently while maintaining secure communication. Integrated MongoDB to dynamically store chat histories and user interactions, enabling persistent data management.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      images: [
        "assets/aichatapp.png",
        "assets/aiApplication.jpg"
      ],
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Developed a full-featured social media platform with post creation, user stories, and friend-following capabilities. Built with React.js and SCSS to deliver a responsive, modern UI with smooth interactions. Implemented a robust RESTful API using Node.js and Express.js, coupled with MySQL for secure data storage and efficient retrieval. Optimized performance for high-traffic scenarios while maintaining clean code architecture and scalable design patterns.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "SCSS"],
      images: [
        "assets/social.png",
        "assets/social2.png",
        // "assets/social-mea-3.jpg"
      ],
      features: [
        "Post creation and sharing system",
        "User stories/status feature",
        "Friend/follower management",
        "Responsive design with SCSS",
        "RESTful API architecture"
      ],
      link: "#"
    },
    {
      id: 5,
      title: "NYC Taxi Trip Duration Prediction",
      description: "Developed a machine learning model to predict taxi trip durations across New York City using historical ride data. Engineered critical temporal and spatial features including Haversine distance calculations and rush hour indicators. Implemented a Random Forest Regressor optimized through hyperparameter tuning, achieving strong predictive accuracy measured by RMSLE. Demonstrated the model's effectiveness with trip distance and pickup time emerging as the most influential features in duration prediction.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest"],
      images: [
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg", // Data analysis
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg", // Code/notebook
        // "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg"  // Graphs/charts
      ],
      features: [
        "Feature engineering for temporal/spatial patterns",
        "Random Forest model implementation",
        "Hyperparameter optimization",
        "Performance evaluation using RMSLE",
        "Feature importance analysis"
      ],
      link: "#"
    },
    {
      id: 6,
      title: "Boston Housing Price Prediction",
      description: "Developed a machine learning system to predict Boston housing prices using property characteristics. Implemented and compared multiple algorithms including Linear Regression, Random Forest, and XGBoost, with hyperparameter optimization via GridSearchCV. Achieved optimal performance with Random Forest (evaluated through RMSE and R² metrics), while identifying key price determinants like crime rates, room numbers, and location proximity. The model serves as a valuable tool for real estate valuation and investment analysis.",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Random Forest", "Linear Regression"],
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg", // Boston house
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg", // Data charts
        // "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg" // ML visualization
      ],
      features: [
        "Comparative analysis of 3 ML algorithms",
        "Hyperparameter tuning with GridSearchCV",
        "Performance evaluation using RMSE & R²",
        "Feature importance analysis",
        "End-to-end data preprocessing pipeline"
      ],
      link: "#"
    }
  ];

  const [currentProject, setCurrentProject] = React.useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        <button className="arrow left" onClick={handlePrev} aria-label="Previous project">
          <img src="assets/right-arrow.png" alt="" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[currentProject].id}
            className="project-card"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
          >
            <motion.div
              className="images"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
            >
              {projects[currentProject].images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${projects[currentProject].title} screenshot ${index + 1}`}
                  loading={index > 0 ? 'lazy' : 'eager'}
                  whileHover={{ scale: 1.03 }}
                />
              ))}
            </motion.div>

            <motion.div
              className="details"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              <h2>{projects[currentProject].title}</h2>
              <p>{projects[currentProject].description}</p>
              <div className="technologies">
                {projects[currentProject].technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button className="arrow right" onClick={handleNext} aria-label="Next project">
          <img src="assets/right-arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
}