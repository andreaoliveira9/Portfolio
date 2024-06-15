let info = {
  name: "André Oliveira",
  logo_name: "André",
  flat_picture: require("./src/assets/potrait.jpg"),
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
    resume:
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
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/two.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/three.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/four.png"),
        },
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. ",
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/one.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/two.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/three.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/four.png"),
        },
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system.",
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png"),
        },
        {
          img: require("./src/assets/portfolio/post/two.png"),
        },
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku",
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.",
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png"),
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png"),
        },
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent.",
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png"),
        },
        {
          img: require("./src/assets/portfolio/smit/two.png"),
        },
        {
          img: require("./src/assets/portfolio/smit/three.png"),
        },
        {
          img: require("./src/assets/portfolio/smit/four.png"),
        },
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets.",
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png"),
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png"),
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png"),
        },
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.',
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/two.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/three.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/four.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/five.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/six.png"),
        },
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc).",
    },
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard",
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2",
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore.",
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients.",
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2",
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3",
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1",
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease.",
    },
  ],
};

export default info;
