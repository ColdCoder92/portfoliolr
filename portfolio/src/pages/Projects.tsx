import { type ReactNode } from 'react'
import projects from '../../projects.json'
import NavBar from './shared/NavBar'
import { Container, Grid } from '@mui/material'

import linkedinLogo from '../../public/assets/linkedinBlackLogo.png'
import githubLogo from '../../public/assets/githubBlackLogo.png'
import emailLogo from '../../public/assets/emailBlackLogo.png'

function Projects() {
  let section: ReactNode[] = projects.list.map((project: any) => {
    return (
      <Grid size={6} key={project.name}>
        <h3 className='hero-title'>{project.name}</h3>
        {project.toolkit.map((toolkit: string) => {
          return (
            <img className='toolkit-icon' src={`public/assets/${toolkit.toLowerCase()}-logo.png`} alt={toolkit} key={toolkit}/>
          )
        })}
        <img className='project-icon' src={`public/assets/${project.icon}.png`} alt={project.name}/>
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