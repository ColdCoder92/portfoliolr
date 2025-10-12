import { type ReactNode } from 'react'
import projects from '../../projects.json'
import NavBar from './shared/NavBar'
import { Container, Grid } from '@mui/material'
// Import Most Images from Assets
import 'src/assets/JAZA.png'
import 'src/assets/asp.netcore-logo.png'
import 'src/assets/csharp-logo.png'
import 'src/assets/javascript-logo.png'
import linkedinLogo from './assets/linkedinBlackLogo.png'
import githubLogo from './assets/githubBlackLogo.png'
import emailLogo from './assets/emailBlackLogo.png'
import 'src/assets/equationSolverPreview.png'
import 'src/assets/darknessStoryCover.png'
import 'src/assets/flagOnHill.png'
import 'src/assets/css-logo.png'
import 'src/assets/html-logo.png'
import 'src/assets/docker-logo.png'
import 'src/assets/godot-logo.png'
import 'src/assets/java-logo.png'
import 'src/assets/mssqlserver-logo.png'
import 'src/assets/unity-logo.png'
import 'src/assets/xunit-logo.png'
import 'src/assets/react-logo.png'
import 'src/assets/jest-logo.png'
import 'src/assets/ms azure-logo.png'
import 'src/assets/javascript-logo.png'
import 'src/assets/preplitLogo.png'
import 'src/assets/python-logo.png'
import 'src/assets/startuplifeLogo.png'
import 'src/assets/typescript-logo.png'

function Projects() {
  let section: ReactNode[] = projects.list.map((project: any) => {
    return (
      <Grid size={6}>
        <h3 className='hero-title'>{project.name}</h3>
        {project.toolkit.map((toolkit: string) => {
          return (
            <img className='toolkit-icon' src={`src/assets/${toolkit.toLowerCase()}-logo.png`} alt={toolkit} />
          )
        })}
        <img className='project-icon' src={`src/assets/${project.icon}`} alt={project.name} />
        <p>{project.description}</p>
        <a href={project.url} target="_blank">View Github Project</a>
      </Grid>
    )
  })
  return (
    <div>
      <NavBar />
      <h1 className='hero-title'>Projects</h1>
      <Container>
        <Grid container spacing={2}>
          {section}
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
                    <img className="logo" src={linkedinLogo} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/ColdCoder92" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub Icon" />
                </a>
                <a href="mailto:lucasrodriguez1002@proton.me">
                    <img className="logo" src={emailLogo} alt="Email Icon" />
                </a>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  )
}

export default Projects