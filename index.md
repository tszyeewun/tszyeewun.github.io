---
layout: default
title: Home
---

<!-- =========================
     HERO SECTION
========================== -->

<section class="hero-section">

  <!-- LEFT -->

  <div class="hero-left">

    <h1 class="hero-title">
      Lia Wun
    </h1>

    <div class="hero-contact">
      tszyeewun_au@outlook.com
    </div>

    <div class="hero-contact">
      Sydney, New South Wales, Australia
    </div>

    <div class="hero-buttons">

      <a href="./Resume.pdf" class="hero-btn">
        Resume.pdf
      </a>

      <a href="https://www.linkedin.com/in/tszyeewun"
         class="hero-btn">
         LinkedIn Profile
      </a>

    </div>

  </div>

  <div class="hero-right">

    <img src="./assets/headshot.jpg"
         alt="Headshot"
         class="headshot">

  </div>

</section>

<section class="about-section">

  <h1>About Me</h1>

  <div class="about-card">

    <p>
      Hello World! Welcome to Lia’s homepage.
    </p>

    <p>
      I am a Master of City Planning student at the University of New South Wales.
    </p>

    <p>
      Alongside my studies, I work as a Traffic Engineer at Genesis Traffic, focusing on traffic modelling, swept path analysis, parking compliance, and transport reporting.
    </p>

    <p>
      My interests focus on applying AI and data-driven approaches to urban problems across transport modelling, GIS and spatial analytics, urban planning, and economic analysis.
    </p>

  </div>

</section>

<section class="about-section">

  <h1>Education</h1>

  <div class="about-card education-card">

    <div class="education-item">

      <div class="education-left">
        Master of City Planning<br>
        University of New South Wales
      </div>

      <div class="education-right">
        Sydney, Australia<br>
        Nov 2024 – Aug 2026 (Expected)
      </div>

    </div>

    <div class="education-item">

      <div class="education-left">
        Bachelor of Finance<br>
        Tianjin University
      </div>

      <div class="education-right">
        Tianjin, China<br>
        Sep 2020 – Jul 2024
      </div>

    </div>

  </div>

</section>

<section class="about-section">

  <h1>Projects</h1>

  <div class="about-card">

    <div class="project-title">
      PedLight-SAC: Reinforcement Learning for Traffic Signal Control with Pedestrian Equity
    </div>

    <div class="project-description">
      Soft Actor-Critic (SAC) framework for pedestrian-aware traffic signal optimisation.
    </div>

    <div class="project-title">
      GIS Analysis of Amenity Equity in Blacktown, NSW
    </div>

    <div class="project-description">
      Spatial analysis and interactive GIS storytelling exploring amenity accessibility and social equity.
    </div>

    <div class="project-title">
      Urban Analysis and Design Proposal for East Killara, NSW
    </div>

    <div class="project-description">
      Urban design proposal of transport accessibility, public domain networks, LEP controls, and 3D spatial visualisations.
    </div>

    <div class="project-title">
      Time Series Volatility Modelling using GARCH and TGARCH: The Impact of Stock Index Options on Stock Price Volatility
    </div>

    <div class="project-description">
      Applied GARCH and TGARCH models to analyse volatility dynamics, asymmetry effects, and market risk before and after the introduction of stock index options.
    </div>

  </div>

</section>

<section class="about-section">

  <h1>Skills</h1>

  <div class="about-card">

    <div class="skill-category">
      Traffic & Transport
    </div>

    <div class="skill-content">
      <em>SIDRA, AutoTURN, SUMO, AutoCAD</em>
    </div>

    <div class="skill-category">
      GIS & Spatial
    </div>

    <div class="skill-content">
      <em>QGIS, ArcGIS Pro, ArcGIS Online, Vectorworks</em>
    </div>

    <div class="skill-category">
      Programming
    </div>

    <div class="skill-content">
      <em>Python, MATLAB, C++</em>
    </div>

    <div class="skill-category">
      Data & Analytics
    </div>

    <div class="skill-content">
      <em>MySQL, SPSS, EViews, NVivo</em>
    </div>

  </div>

</section>

<section class="about-section">

  <h1>Contact</h1>

  <div class="contact-buttons">

    <a href="./Resume.pdf" class="hero-btn">
      Resume
    </a>

    <a href="mailto:tszyeewun_au@outlook.com"
       class="hero-btn">
       Email
    </a>

    <a href="https://www.linkedin.com/in/tszyeewun"
       class="hero-btn"
       target="_blank">
       LinkedIn
    </a>

    <a href="https://github.com/tszyeewun"
       class="hero-btn"
       target="_blank">
       GitHub
    </a>

  </div>

</section>

<style>

/* =========================
   HERO SECTION
========================= */

.hero-section{

  margin:120px auto 0 auto;

  width:100%;
  max-width:1250px;

  background:#FFCC00;

  border-radius:40px;

  padding:125px 90px;

  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:60px;

  box-sizing:border-box;
}

.hero-left{
  flex:1;
}

.hero-title{
  font-size:96px;
  font-weight:800;
  color:#000 !important;
  margin:0 0 30px 0;
  line-height:1;
}

.hero-contact{
  font-size:30px;
  color:#000;
  font-weight:600;
  margin-bottom:10px;
}

.hero-buttons{
  margin-top:40px;
  display:flex;
  gap:20px;
  flex-wrap:wrap;
}

.hero-right{
  display:flex;
  justify-content:center;
  align-items:center;
}
.hero-btn{
  display:inline-block;

  text-decoration:none;

  background:#ECECEF;
  color:#000 !important;

  font-size:25px;
  font-weight:700;

  padding:6px 30px;

  border-radius:18px;

  transition:0.3s ease;

  box-shadow:0 4px 12px rgba(0,0,0,0.12);
}

.hero-btn:hover{
  transform:translateY(-3px);
}

.hero-right{
  display:flex;
  justify-content:center;
  align-items:center;
}
     
.headshot{

  width:360px;
  height:360px;

  object-fit:cover;

  border-radius:50%;

  border:10px solid white;

  box-shadow:0 8px 25px rgba(0,0,0,0.18);
}

.about-section{

  width:100%;

  margin:50px 0;
}

.about-section h1{

  font-size:48px;

  font-weight:800;

  margin-bottom:25px;

  color:#000;
}

/* CARD */

.about-card{

  width:100%;

  box-sizing:border-box;

  background:#F0F0F2;

  padding:45px 90px;

  border-radius:32px;

  box-shadow:0 6px 20px rgba(0,0,0,0.06);
}

/* PARAGRAPH */

.about-card p{

  font-size:28px;

  font-weight:700;

  line-height:1.5;

  color:#111;

  margin-bottom:28px;
}

/* =========================
   EDUCATION
========================= */

.education-item{

  display:flex;

  justify-content:space-between;

  align-items:flex-start;

  gap:40px;

  margin-bottom:50px;
}

.education-item:last-child{

  margin-bottom:0;
}

.education-left{

  font-size:28px;

  font-weight:700;

  line-height:1.5;

  color:#111;
}

.education-right{

  font-size:28px;

  font-weight:700;

  line-height:1.5;

  color:#111;

  text-align:right;
}

/* =========================
   TECHNICAL SKILLS
========================= */

.skill-category{

  font-size:28px;

  font-weight:800;

  margin-top:32px;

  margin-bottom:10px;

  color:#111;
}

.skill-content{

  font-size:28px;

  font-weight:700;

  line-height:1.5;

  color:#666;
}

.skill-content em{

  font-style:italic;
}

/* =========================
   PROJECTS
========================= */

.project-title{

  font-size:28px;

  font-weight:700;

  margin-top:38px;

  margin-bottom:12px;

  color:#111;
}

.project-description{

  font-size:22px;

  font-weight:600;

  line-height:1.5;

  color:#666;
}

/* =========================
   CONTACT BUTTONS
========================= */

.contact-buttons{

  display:flex;

  flex-direction:column;

  align-items:flex-start;

  gap:24px;
}

/* =========================
   BUTTONS
========================= */

.hero-btn{

  display:inline-block;

  text-decoration:none;

  background:white;

  color:#000 !important;

  font-size:28px;

  font-weight:700;

  padding:6px 30px;

  border-radius:18px;

  transition:0.3s ease;

  box-shadow:0 4px 12px rgba(0,0,0,0.12);
}

.hero-btn:hover{

  transform:translateY(-3px);
}

/* =========================
   MOBILE
========================= */

@media (max-width:1100px){

  .hero-section{

    margin:90px auto 0 auto;

    width:95%;

    flex-direction:column-reverse;

    text-align:center;

    padding:40px 20px;

    gap:30px;

    border-radius:28px;
  }

  .hero-title{

    font-size:48px;

    line-height:1.1;
  }

  .hero-contact{

    font-size:16px;
  }

  .hero-buttons{

    justify-content:center;

    gap:12px;

    margin-top:25px;
  }

  .hero-btn{

    font-size:14px;

    padding:8px 16px;

    border-radius:14px;
  }

  .headshot{

    width:180px;
    height:180px;

    border:6px solid white;
  }

  /* SECTION */

  .about-section{

    margin:35px 0;
  }

  .about-section h1{

    font-size:32px;

    margin-bottom:18px;
  }

  /* CARD */

  .about-card{

    padding:28px 22px;

    border-radius:24px;
  }

  /* ABOUT TEXT */

  .about-card p{

    font-size:16px;

    line-height:1.7;

    margin-bottom:18px;
  }

  /* EDUCATION */

  .education-item{

    flex-direction:column;

    gap:10px;

    margin-bottom:30px;
  }

  .education-left{

    font-size:16px;

    line-height:1.6;
  }

  .education-right{

    font-size:15px;

    line-height:1.6;

    text-align:left;

    color:#666;
  }

  /* SKILLS */

  .skill-category{

    font-size:18px;

    margin-top:22px;

    margin-bottom:8px;
  }

  .skill-content{

    font-size:15px;

    line-height:1.6;
  }

  /* PROJECTS */

  .project-title{

    font-size:17px;

    line-height:1.6;

    margin-top:24px;

    margin-bottom:8px;
  }

  .project-description{

    font-size:14px;

    line-height:1.7;
  }

  /* CONTACT */

  .contact-buttons{

    gap:14px;
  }

  .hero-btn{

    font-size:14px;

    padding:8px 18px;

    border-radius:14px;
  }

}

/* =========================
   DARK MODE
========================= */

body.dark .about-card{

  background:#1f1f1f;
}

body.dark .hero-section{
  background:#FFCC00;
}

body.dark .hero-title,
body.dark .hero-contact{
  color:#000 !important;
}

body.dark .hero-btn{
  background:white;
  color:#000 !important;
}

body.dark .about-section h1,
body.dark .about-card p,
body.dark .education-left,
body.dark .education-right,
body.dark .skill-category,
body.dark .skill-content,
body.dark .project-title{

  color:white;
}

body.dark .project-description{

  color:#bdbdbd;
}

</style>
