import type {
  ProjectItem,
  SkillCategory,
  TimelineItem,
  CertificationItem,
  LeadershipItem,
  HobbyItem,
  SocialLink,
  PageKey,
} from "./types";

export const BRAND_NAME = "Isah Hassan Hassan";
export const EMAIL = "hassanisahassan12@gmail.com";
export const EMAIL_ABU = "hhisah@engineering.abu.edu.ng";
export const PHONE = "08146676278";
export const LOCATION = "Nassarawa Gwong, Jos, Plateau State, Nigeria";

export const PROFILE_HOME =
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/20d58aca-e8a2-4918-8e81-fb1f55f58a52/profile-home-7084ccb4-1787661495764.webp";
export const PROFILE_ABOUT =
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/20d58aca-e8a2-4918-8e81-fb1f55f58a52/profile-about-002acb90-1787661495769.webp";

export const SOCIALS: SocialLink[] = [
  { label: "X (Twitter)", href: "https://x.com/hassanisahassan" },
  { label: "Instagram", href: "https://instagram.com/hassanisahassan" },
  { label: "Telegram", href: "https://t.me/hassanisahassan" },
  { label: "YouTube", href: "https://youtube.com/@hassanisahassan" },
  { label: "GitHub", href: "https://github.com/hassanisahassan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hassanisahassan" },
];

export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About Me" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "hobbies", label: "Hobbies" },
  { key: "cv", label: "CV" },
  { key: "contact", label: "Contact" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2003 - 2012",
    title: "Nuruddeen Islamic School",
    org: "Islamic Studies & Primary Education",
    detail: "Foundation in Islamic studies, Qur'anic education and primary schooling.",
  },
  {
    year: "2012 - 2018",
    title: "Al-Iman School Jos",
    org: "Secondary Education",
    detail: "Completed junior and senior secondary education with strong academic standing.",
  },
  {
    year: "2018 - 2019",
    title: "SBRS Funtua",
    org: "Senior Secondary School",
    detail: "Advanced secondary studies focused on science and mathematics pathway.",
  },
  {
    year: "2020 - 2026",
    title: "B.Eng Computer Engineering",
    org: "Ahmadu Bello University, Zaria",
    detail: "Undergraduate engineering programme, control engineering, IoT, software and systems focus.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "control",
    title: "Control Engineering",
    icon: "Cpu",
    color: "emerald",
    skills: ["Smart Systems", "Feedback Control", "Automation", "Embedded Logic", "IoT"],
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: "Cloud",
    color: "blue",
    skills: ["AWS Core Services", "Cloud Foundations", "Deployment", "Virtualization", "Infrastructure"],
  },
  {
    id: "network",
    title: "Networking",
    icon: "ShareNetwork",
    color: "navy",
    skills: ["Networking Essentials", "Topologies", "Security", "Troubleshooting", "Cisco Learning"],
  },
  {
    id: "dev",
    title: "Programming & Web Dev",
    icon: "Code",
    color: "emerald",
    skills: ["HTML5 & CSS3", "Python", "PyQt5", "Responsive Design", "Structured Data"],
  },
  {
    id: "software",
    title: "Engineering Software",
    icon: "Wrench",
    color: "blue",
    skills: ["MATLAB", "Simulation", "Modelling", "System Design", "Analysis"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    color: "navy",
    skills: ["SEO", "Content Strategy", "Web Presence", "Analytics", "Growth"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "IoT Energy Management System",
    category: "IoT",
    tag: "Smart Systems",
    description:
      "Embedded energy monitoring and management system using IoT sensors and cloud telemetry to optimise household and industrial power usage.",
    tech: ["Arduino", "Sensors", "AWS", "Python", "MQTT"],
    year: "2024",
  },
  {
    id: "p2",
    title: "E-Learning Resource Hub",
    category: "Web",
    tag: "Education",
    description:
      "Responsive web platform aggregating learning materials with accessible navigation, structured data and resource organisation for students.",
    tech: ["HTML5", "CSS3", "JSON", "SEO"],
    year: "2023",
  },
  {
    id: "p3",
    title: "Food Delivery Desktop App",
    category: "Desktop",
    tag: "PyQt5",
    description:
      "Feature-rich food ordering desktop application built in Python with a clean PyQt5 graphical interface, order management and local storage.",
    tech: ["Python", "PyQt5", "SQLite"],
    year: "2023",
  },
  {
    id: "p4",
    title: "Temperature Regulation System",
    category: "Control",
    tag: "Feedback",
    description:
      "Closed-loop temperature control prototype applying feedback principles to maintain precise setpoint regulation for controlled environments.",
    tech: ["Sensors", "Control Logic", "MATLAB"],
    year: "2024",
  },
  {
    id: "p5",
    title: "Traffic Monitoring System",
    category: "IoT",
    tag: "Smart Systems",
    description:
      "Intelligent traffic monitoring and flow analysis system using sensing nodes to capture and relay congestion data for urban mobility.",
    tech: ["IoT", "Sensors", "Data Analysis"],
    year: "2024",
  },
  {
    id: "p6",
    title: "Smart Door Access & Climate Control",
    category: "IoT",
    tag: "Home Automation",
    description:
      "Integrated smart door access and climate control system for secure, energy-efficient and automated building management.",
    tech: ["Arduino", "Sensors", "Automation"],
    year: "2025",
  },
  {
    id: "p7",
    title: "Crop Disease Monitoring Drone",
    category: "Control",
    tag: "AgriTech",
    description:
      "Drone-assisted crop health and disease monitoring concept applying sensing, imagery and control engineering for precision agriculture.",
    tech: ["Drones", "Sensors", "Imaging", "Control"],
    year: "2025",
  },
  {
    id: "p8",
    title: "SEO Web Development",
    category: "Web",
    tag: "Digital",
    description:
      "Search-engine-optimised web development practice applying semantic HTML, structured data and performance for higher visibility.",
    tech: ["HTML5", "CSS3", "JSON-LD", "SEO"],
    year: "2023",
  },
];

export const CATEGORIES = ["All", "IoT", "Control", "Web", "Desktop"];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "AWS Academy Graduate - Cloud Foundations", issuer: "AWS Academy", year: "2024" },
  { title: "IT Essentials", issuer: "Cisco Networking Academy", year: "2023" },
  { title: "HTML/CSS Essentials", issuer: "Cisco Networking Academy", year: "2023" },
  { title: "Networking Essentials", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "MATLAB & Simulation", issuer: "Engineering Software Certification", year: "2023" },
];

export const LEADERSHIP: LeadershipItem[] = [
  { role: "Secretary General", org: "COESA (Computer Engineering Students' Association)", detail: "Leading coordination, records and welfare of the association, driving student engagements and events." },
  { role: "Class Representative", org: "U19CO_Engrs", detail: "Representing students, bridging communication with faculty and coordinating class activities." },
  { role: "Mentorship Coordinator", org: "Engineering Bootcamps", detail: "Organising mentorship tracks and technical bootcamps for junior engineering students." },
];

export const HOBBIES: HobbyItem[] = [
  { title: "Football", icon: "SoccerBall", detail: "Active footballer who enjoys teamwork, fitness and competitive matches." },
  { title: "Reading", icon: "BookOpenText", detail: "Enthusiastic reader of technology, engineering and self-development books." },
  { title: "Writing", icon: "PenNib", detail: "Enjoys writing on engineering, motivation and student life topics." },
  { title: "Tech Exploration", icon: "Lightbulb", detail: "Curious builder exploring IoT, automation and emerging technologies." },
  { title: "Movies", icon: "FilmSlate", detail: "Cinema enthusiast who appreciates storytelling and visual craft." },
  { title: "Qur'an Recitation", icon: "BookOpen", detail: "Committed to regular Qur'an recitation and spiritual development." },
  { title: "Islamic Documentaries", icon: "PlayCircle", detail: "Watches Islamic documentaries promoting knowledge and understanding." },
  { title: "Learning from Scholars", icon: "GraduationCap", detail: "Dedicated to studying and learning from Islamic scholars." },
];

export const VISION = {
  title: "IHLINK Co. Ltd",
  tagline: "The Enterprise of the Future",
  blurb:
    "IHLINK is a future enterprise vision connecting entrepreneurs, students and SMEs through technology-driven growth, mentorship and digital solutions built to empower communities.",
  pillars: [
    { title: "Entrepreneurs", detail: "Empowering founders with visibility, tools and networks to scale their ventures." },
    { title: "Students", detail: "Bridging students to skills, internships and opportunities for career growth." },
    { title: "SMEs", detail: "Delivering digital and engineering solutions that optimise small business operations." },
  ],
};

export const HIGHLIGHTS = [
  { title: "Final Year Student", detail: "B.Eng Computer Engineering, ABU Zaria", tag: "Academic" },
  { title: "Control Engineering Enthusiast", detail: "IoT, automation and smart systems", tag: "Specialty" },
  { title: "COESA Sec Gen", detail: "Leadership & student advocacy", tag: "Leadership" },
  { title: "AWS Graduate", detail: "Cloud Foundations certified", tag: "Cloud" },
  { title: "Cisco Learner", detail: "Networking & essentials badge holder", tag: "Network" },
  { title: "Future Entrepreneur", detail: "Founder vision: IHLINK Co. Ltd", tag: "Vision" },
];