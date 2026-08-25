import {
  BRAND_NAME,
  EMAIL,
  PHONE,
  PROFILE_HOME,
  PROFILE_ABOUT,
} from "./constants";

export interface ExamFile {
  name: string;
  content: string;
}

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${BRAND_NAME} | Portfolio - Home</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "${BRAND_NAME}",
    "jobTitle": "Computer Engineering Student",
    "affiliation": { "@type": "CollegeOrUniversity", "name": "Ahmadu Bello University, Zaria" },
    "email": "${EMAIL}",
    "telephone": "${PHONE}"
  }
  </script>
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle Navigation">
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="index.html" class="nav-link active">Home</a>
        <a href="pages/about.html" class="nav-link">About</a>
        <a href="pages/education.html" class="nav-link">Education</a>
        <a href="pages/skills.html" class="nav-link">Skills</a>
        <a href="pages/projects.html" class="nav-link">Projects</a>
        <a href="pages/hobbies.html" class="nav-link">Hobbies</a>
        <a href="pages/cv.html" class="nav-link">CV</a>
        <a href="pages/contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="badge-tag">Final Year · B.Eng Computer Engineering</div>
          <h1 class="hero-title">Building Intelligent Systems & <span class="highlight">Future Technology</span></h1>
          <p class="hero-lead">Control engineering enthusiast, AWS graduate, COESA Secretary General, Cisco learner, and future founder of IHLINK Co. Ltd.</p>
          <div class="hero-actions">
            <a href="pages/projects.html" class="btn btn-primary">View Projects</a>
            <a href="pages/contact.html" class="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="profile-card">
            <img src="${PROFILE_HOME}" alt="${BRAND_NAME}" class="profile-img">
          </div>
        </div>
      </div>
    </section>
    <section class="section section-alt">
      <div class="container">
        <div class="section-header"><p class="section-eyebrow">Snapshot</p><h2 class="section-heading">Key Highlights</h2></div>
        <div class="grid grid-3">
          <div class="card highlight-card"><span class="card-tag">Academic</span><h3>Final Year Student</h3><p>B.Eng Computer Engineering at Ahmadu Bello University, Zaria.</p></div>
          <div class="card highlight-card"><span class="card-tag">Engineering</span><h3>Control Enthusiast</h3><p>Feedback systems, IoT telemetry, process automation.</p></div>
          <div class="card highlight-card"><span class="card-tag">Leadership</span><h3>COESA Secretary General</h3><p>Leading student advocacy, records, and departmental events.</p></div>
          <div class="card highlight-card"><span class="card-tag">Cloud</span><h3>AWS Academy Graduate</h3><p>Cloud Foundations certified with scalable infrastructure skills.</p></div>
          <div class="card highlight-card"><span class="card-tag">Networking</span><h3>Cisco Essentials</h3><p>Network topologies, IP diagnostics, and security principles.</p></div>
          <div class="card highlight-card"><span class="card-tag">Enterprise</span><h3>Founder Vision</h3><p>Architecting IHLINK Co. Ltd to empower SMEs, students, and founders.</p></div>
        </div>
      </div>
    </section>
    <section class="section vision-section">
      <div class="container">
        <div class="vision-box">
          <h2>IHLINK Co. Ltd</h2>
          <p class="vision-sub">The Enterprise of the Future</p>
          <p class="vision-text">Connecting and empowering entrepreneurs, students, and SMEs through innovative technology-driven solutions.</p>
          <div class="grid grid-3">
            <div class="vision-pill"><h4>01. Entrepreneurs</h4><p>Providing technical tools and growth networks.</p></div>
            <div class="vision-pill"><h4>02. Students</h4><p>Bridging students with mentorship and engineering skills.</p></div>
            <div class="vision-pill"><h4>03. SMEs</h4><p>Digital transformation and operational software tools.</p></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-bottom-inner">
      <p>&copy; 2026 ${BRAND_NAME}. Ahmadu Bello University, Zaria.</p>
      <p>COEN 554 Web Programming Examination Deliverable</p>
    </div>
  </footer>
</body>
</html>`;

const ABOUT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link active">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container about-grid">
      <div class="about-sidebar">
        <div class="profile-card sticky-card">
          <img src="${PROFILE_ABOUT}" alt="${BRAND_NAME}" class="profile-img">
          <div class="about-quick-info"><h4>${BRAND_NAME}</h4><p>Jos, Plateau State, Nigeria</p></div>
        </div>
      </div>
      <div class="about-content">
        <span class="section-eyebrow">Biography</span>
        <h1 class="page-heading">About Me</h1>
        <p class="lead-text">Passionate Computer Engineering student at Ahmadu Bello University, Zaria from Nassarawa Gwong, Jos.</p>
        <div class="prose-block">
          <h3>Background & Engineering Vision</h3>
          <p>My academic interests span control engineering, IoT systems, cloud computing, networking, and responsive web design. I have hands-on experience in circuit simulation, Python desktop app design, and embedded telemetry.</p>
        </div>
        <div class="prose-block">
          <h3>Leadership & Mentorship</h3>
          <div class="grid grid-2">
            <div class="card lead-card"><h4>Secretary General</h4><p class="role-org">COESA</p><p>Coordinating departmental records and annual technical symposiums.</p></div>
            <div class="card lead-card"><h4>Class Representative</h4><p class="role-org">U19CO_Engrs</p><p>Bridging student needs with engineering faculty advisers.</p></div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const EDUCATION_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Education | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link active">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container narrow-container">
      <div class="section-header"><p class="section-eyebrow">Academic Journey</p><h1 class="page-heading">Education History</h1></div>
      <div class="timeline-container">
        <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-badge">2020 - 2026</div><div class="timeline-card"><h3>B.Eng Computer Engineering</h3><p class="timeline-institution">Ahmadu Bello University, Zaria</p><p>Control systems, IoT telemetry, microprocessors, and web programming.</p></div></div>
        <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-badge">2018 - 2019</div><div class="timeline-card"><h3>SBRS Funtua</h3><p class="timeline-institution">School of Basic & Remedial Studies</p><p>Pre-degree scientific and mathematical foundation.</p></div></div>
        <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-badge">2012 - 2018</div><div class="timeline-card"><h3>Al-Iman School Jos</h3><p class="timeline-institution">Secondary Education</p><p>Completed senior secondary school with science distinction.</p></div></div>
        <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-badge">2003 - 2012</div><div class="timeline-card"><h3>Nuruddeen Islamic School</h3><p class="timeline-institution">Primary & Islamic Studies</p><p>Primary education and Islamic moral and Quranic foundation.</p></div></div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const SKILLS_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skills & Certifications | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link active">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container">
      <div class="section-header"><p class="section-eyebrow">Competencies</p><h1 class="page-heading">Skills & Certifications</h1></div>
      <div class="grid grid-3">
        <div class="card skill-card"><h3>Control Engineering</h3><ul class="skill-list"><li>Feedback Systems</li><li>Automation</li><li>IoT Sensors</li></ul></div>
        <div class="card skill-card"><h3>Cloud Computing</h3><ul class="skill-list"><li>AWS Foundations</li><li>Cloud Architecture</li><li>Virtualization</li></ul></div>
        <div class="card skill-card"><h3>Networking</h3><ul class="skill-list"><li>Cisco Essentials</li><li>Topologies & Security</li><li>Diagnostics</li></ul></div>
        <div class="card skill-card"><h3>Programming & Web</h3><ul class="skill-list"><li>Pure HTML5 & CSS3</li><li>Python & PyQt5</li><li>JSON & JSON-LD</li></ul></div>
        <div class="card skill-card"><h3>Engineering Software</h3><ul class="skill-list"><li>MATLAB & Simulink</li><li>Proteus Circuit Design</li><li>Arduino IDE</li></ul></div>
        <div class="card skill-card"><h3>Digital Marketing</h3><ul class="skill-list"><li>SEO Optimization</li><li>Content Strategy</li><li>Analytics</li></ul></div>
      </div>
      <div class="certifications-section">
        <h2 class="sub-heading">Certifications</h2>
        <div class="grid grid-2">
          <div class="card cert-card"><span class="cert-badge">2024</span><h4>AWS Academy Graduate - Cloud Foundations</h4><p class="cert-issuer">AWS Academy</p></div>
          <div class="card cert-card"><span class="cert-badge">2023</span><h4>IT Essentials</h4><p class="cert-issuer">Cisco Networking Academy</p></div>
          <div class="card cert-card"><span class="cert-badge">2023</span><h4>HTML & CSS Essentials</h4><p class="cert-issuer">Cisco Networking Academy</p></div>
          <div class="card cert-card"><span class="cert-badge">2024</span><h4>Networking Essentials</h4><p class="cert-issuer">Cisco Networking Academy</p></div>
          <div class="card cert-card"><span class="cert-badge">2024</span><h4>Cybersecurity Essentials</h4><p class="cert-issuer">Cisco Networking Academy</p></div>
          <div class="card cert-card"><span class="cert-badge">2023</span><h4>MATLAB & Simulation</h4><p class="cert-issuer">Engineering Software</p></div>
        </div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const PROJECTS_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link active">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container">
      <div class="section-header"><p class="section-eyebrow">Gallery</p><h1 class="page-heading">Engineering Projects</h1></div>
      <div class="grid grid-3">
        <article class="card project-card"><span class="card-tag">IoT</span><h3>IoT Energy Management</h3><p>Embedded telemetry using Arduino and cloud monitoring.</p><div class="project-tech-tags"><span class="tech-tag">Arduino</span><span class="tech-tag">AWS</span></div></article>
        <article class="card project-card"><span class="card-tag">Web</span><h3>E-Learning Resource Hub</h3><p>Accessible student resource repository with SEO structure.</p><div class="project-tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span></div></article>
        <article class="card project-card"><span class="card-tag">Desktop</span><h3>Food Delivery App</h3><p>PyQt5 graphical desktop ordering app with SQLite database.</p><div class="project-tech-tags"><span class="tech-tag">Python</span><span class="tech-tag">PyQt5</span></div></article>
        <article class="card project-card"><span class="card-tag">Control</span><h3>Temperature Regulation</h3><p>Closed-loop PID thermal control system for setpoint stabilization.</p><div class="project-tech-tags"><span class="tech-tag">PID</span><span class="tech-tag">MATLAB</span></div></article>
        <article class="card project-card"><span class="card-tag">IoT</span><h3>Traffic Monitoring System</h3><p>Intelligent sensing nodes dynamically managing signal intervals.</p><div class="project-tech-tags"><span class="tech-tag">Sensors</span><span class="tech-tag">IoT</span></div></article>
        <article class="card project-card"><span class="card-tag">Smart Home</span><h3>Smart Door & Climate Booth</h3><p>RFID authentication with climate management automation.</p><div class="project-tech-tags"><span class="tech-tag">Arduino</span><span class="tech-tag">RFID</span></div></article>
        <article class="card project-card"><span class="card-tag">AgriTech</span><h3>Crop Disease Drone</h3><p>Drone multispectral imaging architecture for crop diagnostics.</p><div class="project-tech-tags"><span class="tech-tag">Drones</span><span class="tech-tag">Vision</span></div></article>
        <article class="card project-card"><span class="card-tag">Web</span><h3>SEO Semantic Web Platform</h3><p>W3C semantic HTML5 and Schema.org JSON-LD structured data.</p><div class="project-tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">JSON-LD</span></div></article>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const HOBBIES_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hobbies | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link active">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container">
      <div class="section-header"><p class="section-eyebrow">Personal Dimension</p><h1 class="page-heading">Hobbies & Interests</h1></div>
      <div class="grid grid-4">
        <div class="card hobby-card"><h3>Playing Football</h3><p>Teamwork, physical fitness, and tactical communication.</p></div>
        <div class="card hobby-card"><h3>Reading Books</h3><p>Technology, engineering treatises, and self-development.</p></div>
        <div class="card hobby-card"><h3>Technical Writing</h3><p>Writing engineering insights and student guidance articles.</p></div>
        <div class="card hobby-card"><h3>Tech Exploration</h3><p>Testing microcontrollers, automation gadgets, and IoT nodes.</p></div>
        <div class="card hobby-card"><h3>Watching Movies</h3><p>Appreciating thoughtful storytelling and cinematic craft.</p></div>
        <div class="card hobby-card"><h3>Qur'an Recitation</h3><p>Regular recitation, contemplation, and Tajweed accuracy.</p></div>
        <div class="card hobby-card"><h3>Islamic Documentaries</h3><p>Historical civilizations, scientific discoveries, and culture.</p></div>
        <div class="card hobby-card"><h3>Learning from Scholars</h3><p>Studying under respected scholars for wisdom and discipline.</p></div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const CV_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curriculum Vitae | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link active">CV</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container narrow-container">
      <div class="card cv-header-card">
        <h1 class="cv-name">${BRAND_NAME}</h1>
        <p class="cv-title">B.Eng Computer Engineering Undergraduate · ABU Zaria</p>
        <p class="cv-meta">Email: ${EMAIL} | Phone: ${PHONE}</p>
      </div>
      <div class="cv-section-block">
        <h2 class="cv-section-title">Education</h2>
        <div class="card cv-list-card">
          <p><strong>B.Eng Computer Engineering</strong> - Ahmadu Bello University, Zaria (2020-2026)</p>
          <p><strong>Pre-Degree Science</strong> - SBRS Funtua (2018-2019)</p>
          <p><strong>Senior Secondary</strong> - Al-Iman School Jos (2012-2018)</p>
        </div>
      </div>
      <div class="cv-section-block">
        <h2 class="cv-section-title">Certifications</h2>
        <div class="card cv-list-card">
          <ul class="cv-bullets">
            <li>AWS Academy Graduate - Cloud Foundations (2024)</li>
            <li>Cisco IT Essentials & Networking Essentials (2023-2024)</li>
            <li>Cisco Cybersecurity Essentials & HTML/CSS (2023-2024)</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const CONTACT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact | ${BRAND_NAME}</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand-logo"><span class="logo-box">IH</span><span class="logo-text">${BRAND_NAME}</span></a>
      <label for="nav-toggle" class="nav-toggle-label"><span class="hamburger-bar"></span><span class="hamburger-bar"></span><span class="hamburger-bar"></span></label>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="hobbies.html" class="nav-link">Hobbies</a>
        <a href="cv.html" class="nav-link">CV</a>
        <a href="contact.html" class="nav-link active">Contact</a>
      </nav>
    </div>
  </header>
  <main class="page-main">
    <div class="container contact-layout">
      <div class="contact-info-panel">
        <div class="card"><p class="contact-label">Email</p><p class="contact-val">${EMAIL}</p></div>
        <div class="card"><p class="contact-label">Phone</p><p class="contact-val">${PHONE}</p></div>
        <div class="card"><p class="contact-label">Location</p><p class="contact-val">Jos, Plateau State, Nigeria</p></div>
      </div>
      <div class="contact-form-panel">
        <div class="card form-card">
          <h3>Send Message</h3>
          <form class="html-form" action="#" method="post">
            <div class="form-group"><label for="name">Name</label><input type="text" id="name" required class="form-control"></div>
            <div class="form-group"><label for="email">Email</label><input type="email" id="email" required class="form-control"></div>
            <div class="form-group"><label for="msg">Message</label><textarea id="msg" rows="4" required class="form-control"></textarea></div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-bottom-inner"><p>&copy; 2026 ${BRAND_NAME}.</p></div></footer>
</body>
</html>`;

const STYLE_CSS = `:root {
  --color-primary: #0F172A;
  --color-secondary: #2563EB;
  --color-accent: #10B981;
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-text: #1E293B;
  --color-muted: #64748B;
  --color-border: #E2E8F0;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--color-bg); color: var(--color-text); line-height: 1.6; }
.container { width: 92%; max-width: 1100px; margin: 0 auto; }
.narrow-container { max-width: 800px; }
.site-header { background: var(--color-primary); position: sticky; top: 0; z-index: 100; }
.header-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.brand-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.logo-box { background: var(--color-secondary); color: #fff; font-weight: 800; padding: 4px 10px; border-radius: 6px; }
.logo-text { color: #fff; font-weight: 700; font-size: 0.95rem; }
.main-nav { display: flex; gap: 4px; }
.nav-link { color: #cbd5e1; text-decoration: none; font-size: 0.85rem; padding: 6px 10px; border-radius: 6px; }
.nav-link:hover, .nav-link.active { background: var(--color-secondary); color: #fff; }
.nav-toggle, .nav-toggle-label { display: none; }
.hero-section { background: var(--color-primary); color: #fff; padding: 60px 0; }
.hero-container { display: flex; align-items: center; gap: 36px; }
.hero-content { flex: 1.2; }
.badge-tag { display: inline-block; background: rgba(16,185,129,0.15); color: #34d399; padding: 3px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 12px; }
.hero-title { font-size: 2.3rem; margin-bottom: 12px; color: #fff; }
.hero-title .highlight { color: #38bdf8; }
.hero-lead { color: #cbd5e1; font-size: 1rem; margin-bottom: 20px; }
.hero-actions { display: flex; gap: 10px; }
.btn { display: inline-flex; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 0.9rem; cursor: pointer; }
.btn-primary { background: var(--color-secondary); color: #fff; border: none; }
.btn-outline { border: 1px solid rgba(255,255,255,0.3); color: #fff; }
.profile-card { border-radius: 14px; overflow: hidden; background: #fff; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
.profile-img { width: 100%; max-width: 280px; display: block; }
.section { padding: 50px 0; }
.section-alt { background: #fff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
.section-header { text-align: center; margin-bottom: 32px; }
.section-eyebrow { color: var(--color-accent); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
.section-heading, .page-heading { font-size: 1.8rem; margin-top: 4px; color: var(--color-primary); }
.grid { display: grid; gap: 18px; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.card { background: #fff; border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; }
.card-tag { display: inline-block; background: #ecfdf5; color: #065f46; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 8px; margin-bottom: 8px; }
.vision-section { background: var(--color-primary); color: #fff; }
.vision-box { background: rgba(255,255,255,0.05); padding: 30px; border-radius: 14px; }
.vision-box h2 { color: #fff; }
.vision-sub { color: #38bdf8; font-weight: 600; font-size: 0.9rem; }
.vision-text { color: #cbd5e1; margin: 12px 0 20px; font-size: 0.95rem; }
.vision-pill { background: rgba(255,255,255,0.06); padding: 16px; border-radius: 10px; }
.vision-pill h4 { color: #34d399; margin-bottom: 4px; }
.page-main { padding: 40px 0 60px; }
.about-grid { display: grid; grid-template-columns: 280px 1fr; gap: 36px; }
.timeline-container { border-left: 3px solid var(--color-secondary); padding-left: 24px; margin-top: 24px; }
.timeline-item { position: relative; margin-bottom: 28px; }
.timeline-dot { position: absolute; left: -33px; top: 4px; width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent); }
.timeline-badge { display: inline-block; background: #eff6ff; color: var(--color-secondary); font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 8px; margin-bottom: 6px; }
.skill-list { list-style: none; margin-top: 8px; font-size: 0.88rem; color: var(--color-muted); }
.certifications-section { margin-top: 40px; }
.sub-heading { font-size: 1.4rem; margin-bottom: 16px; }
.cert-badge { display: inline-block; background: #ecfdf5; color: var(--color-accent); font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: 6px; }
.project-tech-tags { display: flex; gap: 6px; margin-top: 10px; }
.tech-tag { background: #f1f5f9; color: var(--color-secondary); font-size: 0.75rem; font-weight: 600; padding: 2px 6px; border-radius: 4px; }
.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.contact-label { font-size: 0.75rem; color: var(--color-muted); text-transform: uppercase; font-weight: 600; }
.contact-val { font-weight: 600; color: var(--color-primary); }
.html-form { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
.form-group { display: flex; flex-direction: column; gap: 4px; }
.form-group label { font-size: 0.85rem; font-weight: 600; color: var(--color-primary); }
.form-control { padding: 8px 12px; border: 1px solid var(--color-border); border-radius: 6px; font-family: inherit; font-size: 0.9rem; }
.site-footer { background: var(--color-primary); color: #94a3b8; padding: 20px 0; text-align: center; font-size: 0.85rem; }
@media (max-width: 800px) {
  .hero-container, .about-grid, .contact-layout { flex-direction: column; grid-template-columns: 1fr; }
  .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .main-nav { flex-wrap: wrap; justify-content: center; }
}
@media (max-width: 500px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .hero-title { font-size: 1.8rem; }
}`;

const DATA_JSON = `{
  "student": {
    "name": "${BRAND_NAME}",
    "degree": "B.Eng Computer Engineering",
    "institution": "Ahmadu Bello University, Zaria",
    "level": "Final Year",
    "contact": { "email": "${EMAIL}", "phone": "${PHONE}" }
  },
  "course": { "code": "COEN 554", "title": "Web Programming", "year": "2026" }
}`;

const TECHNICAL_REPORT_MD = `# COEN 554 Web Programming Technical Report
**Student:** ${BRAND_NAME} | **Affiliation:** Ahmadu Bello University, Zaria | **Course:** COEN 554
This project satisfies all requirements: pure HTML5, CSS3, JSON, and JSON-LD with zero client-side JavaScript.`;

export const EXAM_FILES: ExamFile[] = [
  { name: "index.html", content: INDEX_HTML },
  { name: "about.html", content: ABOUT_HTML },
  { name: "education.html", content: EDUCATION_HTML },
  { name: "skills.html", content: SKILLS_HTML },
  { name: "projects.html", content: PROJECTS_HTML },
  { name: "hobbies.html", content: HOBBIES_HTML },
  { name: "cv.html", content: CV_HTML },
  { name: "contact.html", content: CONTACT_HTML },
  { name: "style.css", content: STYLE_CSS },
  { name: "data.json", content: DATA_JSON },
  { name: "Technical_Report.md", content: TECHNICAL_REPORT_MD },
];
