---
layout: default
title: Home
---

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
        Master of City Planning, University of New South Wales
      </div>

      <div class="education-right">
        Sydney, Australia<br>
        Nov 2024 – Aug 2026 (Expected)
      </div>

    </div>

    <div class="education-item">

      <div class="education-left">
        Bachelor of Finance, Tianjin University
      </div>

      <div class="education-right">
        Tianjin, China<br>
        Sep 2020 – Jul 2024
      </div>

    </div>

  </div>

</section>

<section class="about-section">

  <h1>Technical Skills</h1>

  <div class="about-card">

    <div class="skill-category">
      Traffic & Transport
    </div>

    <div class="skill-content">
      SIDRA, AutoTURN, SUMO, AutoCAD
    </div>

    <div class="skill-category">
      GIS & Spatial
    </div>

    <div class="skill-content">
      QGIS, ArcGIS Pro, ArcGIS Online, Vectorworks
    </div>

    <div class="skill-category">
      Programming
    </div>

    <div class="skill-content">
      Python, MATLAB, C++
    </div>

    <div class="skill-category">
      Data & Analytics
    </div>

    <div class="skill-content">
      MySQL, SPSS, EViews, NVivo
    </div>

  </div>

</section>

<section class="about-section">

  <h1>Featured Projects</h1>

  <div class="about-card">

    <div class="project-title">
      PedLight-SAC: Reinforcement Learning for Traffic Signal Control with Pedestrian Equity
    </div>

    <div class="project-description">
      Soft Actor-Critic (SAC) framework for pedestrian-aware traffic signal optimization.
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
      Urban design proposal of transport accessibility, public domain networks, LEP controls, and 3D spatial visualisations in East Killara.
    </div>

    <div class="project-title">
      Macquarie Park: Transport-Oriented Development (TOD) Accelerated Precinct
    </div>

    <div class="project-description">
      Master planning proposal focused on mobility integration, accessibility, connectivity, active transport networks, mixed-use development, and public domain integration.
    </div>

    <div class="project-title">
      Urban Heat Island and Sustainable Design: Slave Island Project
    </div>

    <div class="project-description">
      Sustainable urban design project focused on urban heat mitigation and climate-resilient built environments.
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

  <h1>Contact</h1>

  <div class="about-card">

    <p>
      Email<br>
      tszyeewun_au@outlook.com
    </p>

    <p>
      LinkedIn<br>
      linkedin.com/in/tszyeewun
    </p>

    <p>
      GitHub<br>
      github.com/liawun
    </p>

  </div>

</section>

<style>

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

  font-size:30px;

  font-weight:800;

  margin-top:32px;

  margin-bottom:10px;

  color:#000;
}

.skill-content{

  font-size:26px;

  font-weight:700;

  line-height:1.8;

  color:#333;
}

/* =========================
   PROJECTS
========================= */

.project-title{

  font-size:34px;

  font-weight:800;

  margin-top:38px;

  margin-bottom:12px;

  color:#000;
}

.project-description{

  font-size:26px;

  font-weight:700;

  line-height:1.8;

  color:#666;
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
body.dark .skill-category,
body.dark .skill-content,
body.dark .project-title{

  color:white;
}

body.dark .project-description{

  color:#bdbdbd;
}

</style>
