let info = {
  name: "André Oliveira",
  logo_name: "André",
  flat_picture: require("./src/assets/potrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "I am a Software Engineering student at Aveiro University, equipped with a robust proficiency in various programming languages and technologies. My repertoire includes Python, Java, C an C++, complemented by hands-on experience in databases (both SQL and NoSQL), Flask, Spring, AGILE methodologies, Scrum, Git, and Linux.<br></br>My academic journey has instilled in me a solid grasp of software development principles and methodologies, fostering strong problem-solving skills and computational thinking.<br></br>Beyond technical prowess, I bring to the table exceptional teamwork and communication abilities, enabling me to collaborate seamlessly with a diverse range of individuals.<br></br>I am inherently driven to learn and continuously seek opportunities for personal and professional growth. Don't hesitate to get in touch—I'm always open to new challenges and connections.",
  links: {
    linkedin: "https://www.linkedin.com/in/andré-oliveira-72661627b/",
    github: "https://github.com/andreaoliveira9",
    cv:
      "https://github.com/andreaoliveira9/Portfolio/blob/main/src/assets/pdfs/CV-André_Oliveira.pdf",
  },
  education: [
    {
      name: "University of Aveiro",
      place: "Aveiro, Portugal",
      date: "Sep, 2021 - Present",
      degree: "Bachelor's in Software Engineering",
      gpa: "16.3/20.0",
      description:
        "Currently pursuing a Bachelor's degree in Software Engineering at the University of Aveiro, with a focus on software development and computer science.",
      skills: [
        "Algorithms",
        "Data Structures",
        "Software Engineering",
        "Databases",
        "Web Development",
        "Computer Networks",
        "Operating Systems",
        "Computer Architecture",
        "Artificial Intelligence",
        "Machine Learning",
      ],
    },
    {
      name: "Dr. Mario Sacramento Secondary School",
      place: "Aveiro, Portugal",
      date: "Sep, 2018 - Jun, 2021",
      degree: "High School",
      gpa: "18.9/20.0",
      description:
        "Completed my high school education with a focus on the sciences.",
      skills: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Geology",
        "Spanish",
        "Portuguese",
        "Physical Education",
        "Psychology",
        "Filosophy",
      ],
    },
  ],
  experience: [
    {
      name: "Software developer",
      place:
        "Núcleo de Estudantes de Informática AAUAv, Aveiro University, Portugal",
      date: "Sep, 2023 - Present",
      position: "Backend Developer",
      description:
        "As a backend developer at NEI (https://nei.web.ua.pt), I developed new features and fixed bugs on their website using FastAPI (Python) and PostgreSQL.",
      skills: ["FastAPI", "PostgreSQL", "Docker", "Git", "React"],
    },
    {
      name: "Global Game Jam 2024",
      place: "Aveiro University, Portugal",
      date: "Jan, 2024 - Jan, 2024",
      position: "Game Developer",
      description:
        "Introduced to game development, created a game using godot engine.",
      skills: ["Godot Engine", "C#"],
    },
  ],
  skills: [
    {
      title: "languages",
      info: ["Python", "Javascript", "Java", "C", "C++", "C#", "SQL", "NoSQL"],
      icon: "fa fa-code",
    },
    {
      title: "data frameworks",
      info: ["Keras", "Numpy", "Pandas", "OpenCV", "Tensorflow"],
      icon: "fa fa-cubes",
    },
    {
      title: "web technologies",
      info: [
        "React",
        "Node",
        "Flask",
        "HTML",
        "CSS",
        "Fast API",
        "Spring Boot",
        "Bootstrap",
        "DaisyUI",
      ],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: [
        "MongoDB",
        "MySQL",
        "Neo4j",
        "SQLite",
        "PostgreSQL",
        "Redis",
        "Cassandra",
      ],
      icon: "fa fa-database",
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Agile",
        "Scrum",
        "JIRA",
        "Firebase",
        "SonarQube",
        "RabbitMQ",
      ],
      icon: "fas fa-tools",
    },
    {
      title: "design",
      info: ["Figma"],
      icon: "fa fa-pencil-square-o",
    },
  ],
  portfolio: [
    {
      name: "TrailBlazer",
      pictures: [
        {
          img: require("./src/assets/portfolio/trailblazer/LogoBlack.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/RecommendationAssessment.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/HomePage.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/OfferList.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/BasePage.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/Payment.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/Review.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/MyOffers.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/MyTransactions.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/Dashboard.png"),
        },
        {
          img: require("./src/assets/portfolio/trailblazer/Analysis.png"),
        },
      ],
      technologies: [
        "TypeCript",
        "PostgreSQL",
        "MongoDB",
        "React",
        "RabbitMQ",
        "Docker",
        "Firebase",
        "fastAPI",
        "NGINX",
        "Elasitcsearch",
        "Kibana",
        "JIRA",
        "SonarCloud",
      ],
      category: "Website",
      date: "Feb, 2024 - Jun, 2024",
      github: "https://github.com/PI-Trailblazer/deployement",
      visit: "https://pi-trailblazer.github.io/microsite/",
      description:
        "Trailblazer is a groundbreaking initiative aimed at revitalizing the tourism industry through the integration of Machine Learning (ML) and Natural Language Processing (NLP) technologies. By developing an advanced Destination Management System (DMS), Trailblazer seeks to empower Destination Management Organizations (DMOs) with predictive analytics to foresee trends and make informed decisions in infrastructure, marketing, and sustainability practices. The system analyzes tourists' feedback across various platforms to derive insights into preferences and sentiments, enhancing service quality and personalizing travel experiences. At its core, Trailblazer features a personalized recommendation engine that curates activities tailored to individual interests, fostering a seamless exploration of new experiences while enabling providers to effectively showcase their offerings. This multifaceted approach benefits tourists with customized travel suggestions, provides attraction providers with valuable market insights, and equips DMOs with sophisticated analytical tools for sustainable tourism development.",
    },
    {
      name: "GateMate",
      pictures: [
        {
          img: require("./src/assets/portfolio/gatemate/logo.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/HomePage.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/Login.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/AllFlights.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/FlightData.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/BuyFlight.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/MyTickets.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/CheckinOnline.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/Map.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/FlightLiveData.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/FlightsAdmin.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/FlightInfoAdmin.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/CheckinManual.png"),
        },
        {
          img: require("./src/assets/portfolio/gatemate/Display.png"),
        },
      ],
      technologies: [
        "React",
        "NGINX",
        "Docker",
        "Spring Boot",
        "MySQL",
        "RabbitMQ",
        "SonarCloud",
        "JIRA",
      ],
      category: "Website",
      date: "Apr, 2024 - Jun, 2024",
      github: "https://github.com/GateMate-TQS/GateMate",
      description:
        "GateMate is a flight booking and management platform designed to simplify and enhance the travel experience for users utilizing air travel services. It will be used by travelers to perform various flight-related operations, such as ticket booking, online check-in, and accessing real-time flight information. The high-level problem our system aims to solve is the complexity and lack of convenience often associated with air travel. Currently, travelers frequently need to deal with multiple websites and apps from different airlines to make their reservations, check in, and obtain information about their flights. This can be confusing and time-consuming, resulting in a frustrating travel experience. GateMate was conceived to address this problem by offering a comprehensive and centralized solution for all users' flight booking and management needs. With an intuitive and user-friendly interface, travelers can complete all necessary steps before their trip, from booking tickets to checking in and accessing updated information about their flights, all in one place. Initially, we planned to include extensive integration with various airlines, providing users with a wide range of flight options. However, due to the complexity and challenges associated with this approach, we decided to focus on a few major airlines for the initial launch of the system, with plans to expand and include more airlines in the future. This system differentiates itself from similar products through its integrated, user-centric approach. By consolidating all flight-related functionalities into a single platform, GateMate offers users a more convenient and efficient experience, making air travel more accessible and enjoyable.",
    },
    {
      name: "DigDug AI Agent",
      pictures: [
        {
          img: require("./src/assets/portfolio/digdug/logo.jpg"),
        },
      ],
      technologies: ["Python", "Search Algorithms", "Artificial Intelligence"],
      category: "Artificial Intelligence",
      github: "https://github.com/andreaoliveira9/Projeto-IA",
      date: "Sep, 2023 - Jan, 2024",
      description:
        "Developed an Autonomous Agent for the game Dig Dug in Python using search algorithms to navigate with the agent around the map.",
    },
    {
      name: "Costa Run",
      pictures: [
        {
          img: require("./src/assets/portfolio/costarun/logo.jpg"),
        },
      ],
      technologies: ["Godot Engine", "C#"],
      category: "Game Development",
      github: "https://github.com/andreaoliveira9/GGJ-24",
      date: "Jan, 2024 - Jan, 2024",
      description:
        " Developed a game using Godot Engine for the Global Game Jam 2024. The game is a Tychon game where the player has to navigate through the map and collect money.",
    },
    {
      name: "Distributed Music Editor",
      pictures: [
        {
          img: require("./src/assets/portfolio/distributedmusiceditor/logo.png"),
        },
      ],
      technologies: ["Python", "Redis", "Celery", "Socket"],
      category: "Distributed Systems",
      github: "https://github.com/andreaoliveira9/Projeto-CD",
      date: "May, 2023 - Jun, 2023",
      description:
        "Developed a distributed music editor using Python. The system allows multiple workers to edit the same music file simultaneously. The system uses Redis as a database and Celery for task management. The system is composed of a server and multiple workers.",
    },
    {
      name: "DETI Store",
      pictures: [
        {
          img: require("./src/assets/portfolio/detistore/xss_search-1.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/recaptcha.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/code_expriration.png"),
        },
        {
          img: require("./src/assets/portfolio/detistore/email_code.png"),
        },
        {
          img: require("./src/assets/portfolio/detistore/enter_code.png"),
        },
        {
          img: require("./src/assets/portfolio/detistore/email_profile_change.jpg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/xss_search_fixed-1.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/xss_comments-1.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/xss_comments-2221.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/sql_injection_wishlist-1.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/InjectionCartSafe.jpeg"),
        },
        {
          img: require("./src/assets/portfolio/detistore/certificate.jpeg"),
        },
      ],
      technologies: [
        "Flask",
        "SQLAlchemy",
        "SQLite",
        "HTML",
        "CSS",
        "Bootstrap",
        "NGINX",
      ],
      category: "Website",
      github: "https://github.com/andreaoliveira9/Projeto-SIO-2",
      date: "Oct, 2023 - Dec, 2023",
      description:
        "Developed a simple DETI store using Flask. Implemented with high security standards like OAuth2, database encryption, recaptcha, and more.",
    },
  ],
};

export default info;
