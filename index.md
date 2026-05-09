---
layout: default
title: Home
---

<section class="hero-section">

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

  <div class="about-card">

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

  </div>

</section>

<style>

/* =========================
   HERO SECTION
========================= */

.hero-section{

  width:100%;

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
  color:#000;
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

/* =========================
   ABOUT SECTION
========================= */

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

.about-card{

  width:100%;

  box-sizing:border-box;

  background:#F0F0F2;

  padding:45px 90px;

  border-radius:32px;

  box-shadow:0 6px 20px rgba(0,0,0,0.06);
}

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

  gap:40px;

  margin-bottom:50px;
}

.education-left,
.education-right{

  font-size:28px;

  font-weight:700;

  line-height:1.5;

  color:#111;
}

.education-right{
  text-align:right;
}

/* =========================
   PROJECTS
========================= */

.project-title{

  font-size:28px;

  font-weight:700;

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
   MOBILE
========================= */

@media (max-width:1100px){

  .hero-section{

    flex-direction:column-reverse;

    text-align:center;

    padding:40px 20px;

    gap:30px;

    border-radius:28px;
  }

  .hero-title{

    font-size:48px;
  }

  .hero-contact{

    font-size:16px;
  }

  .hero-buttons{

    justify-content:center;
  }

  .hero-btn{

    font-size:14px;

    padding:8px 16px;
  }

  .headshot{

    width:180px;
    height:180px;

    border:6px solid white;
  }

  .about-section h1{

    font-size:32px;
  }

  .about-card{

    padding:28px 22px;
  }

  .about-card p,
  .education-left,
  .education-right{

    font-size:16px;
  }

  .education-item{

    flex-direction:column;

    gap:10px;
  }

  .education-right{

    text-align:left;
  }

}

/* =========================
   DARK MODE
========================= */

body.dark .about-card{

  background:#1f1f1f;
}

body.dark .about-section h1,
body.dark .about-card p,
body.dark .education-left,
body.dark .education-right,
body.dark .project-title{

  color:white;
}

body.dark .project-description{

  color:#bdbdbd;
}

</style>
