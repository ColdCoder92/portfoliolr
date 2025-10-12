import '../App.css'
import NavBar from './shared/NavBar'
import { Container, Grid } from '@mui/material'
// Import Some Images from Assets
import './assets/linkedinBlackLogo.png'
import './assets/githubBlackLogo.png'
import './assets/emailBlackLogo.png'
import './assets/selfie.jpg'


function Home() {
  return (
    <div className="page">
          <NavBar />
          <h1 className="hero-title">Welcome!</h1>
          <Container>
            <Grid container spacing={2}>
              <Grid size={6}>
                <img width="100%" src="./assets/selfie.jpg" alt="Selfie" className="selfie" />
              </Grid>
              <Grid size={6}>
                <h3>Lucas Rodriguez</h3>
                <h3>Fullstack Software Developer</h3>
              </Grid>
            </Grid>
          <Grid spacing={12}>
            <p>
              My journey into technology began with a strong academic foundation,
              culminating in a degree focused on computer science. Driven by a 
              passion for problem-solving, I've consistently sought opportunities
              to expand my tehcnical expertise. My career goals center on becoming
              a proficient software engineer, where I can leverage my skills to create
              impactful solutions. My professional experience includes maintaining a
              website for The Startup Life, LLC., where I honed my abilities in web
              development. My Revature experience provided a comprehensive introduction
              to fullstack development, emphasizing a strong foundation in both front-end
              and back-end technologies using Spring, ASP.NET Core, SQL, and React,
              solidifying my understanding of the entire software development lifecycle.
              I applied that understanding to mutiple real-world project, incorporating
              Rest and Agile methodologies.
            </p>
            <p>
              I posess a robust technical skill set, encompassing proficiency in web
              development (React, HTML, CSS, JavaScript/TypeScript), database management 
              (MySQL, MSSQL Server), version control (Git), Java, C#, and Python.
              Furthermore, I am a confident communicator and presenter, capable of 
              effectively conveying complex technical information to both tehcnical and 
              non-technical audiences. My problem-solving capabiliities are demonstrated 
              through my ability to analyze intricate challenges and devise efficient, 
              scalable solutions. I naturally assume leadership roles within team 
              environments, fostering collaboration and driving projects to successful 
              completion. I am a dedicated team player, valuing open communication audiences
              contributing constructively to achieve shared objectives. My ability to 
              quickly learn and adapt to new technologies makes me a valuable asset in 
              dynamic and evolving environments.
            </p>
          </Grid>
          </Container>
          <footer className="footer">
            <Container>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <p>&copy; 2025 Lucas Rodriguez</p>
                </Grid>
                <Grid size={6}>
                    <a href="https://www.linkedin.com/in/lucas-rodriguez-coder/" target="_blank">
                        <img className="logo" src="./assets/linkedinBlackLogo.png" alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/ColdCoder92" target="_blank">
                        <img className="logo" src="./assets/githubBlackLogo.png" alt="GitHub Icon" />
                    </a>
                    <a href="mailto:lucasrodriguez1002@proton.me">
                        <img className="logo" src="./assets/emailBlackLogo.png" alt="Email Icon" />
                    </a>
                </Grid>
              </Grid>
            </Container>
          </footer>
    </div>
  )
}

export default Home