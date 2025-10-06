import { type ReactNode } from 'react'
import projects from '../../projects.json'
import NavBar from './shared/NavBar'
import { Container, Grid } from '@mui/material'

function Projects() {
  let section: ReactNode[] = projects.list.map((project: any) => {
    return (
      <Grid size={6}>
        <h3 className='hero-title'>{project.name}</h3>
        {project.toolkit.map((toolkit: string) => {
          return (
            <img className='toolkit-icon' src={"src/assets/" + toolkit.toLowerCase() + "-logo.png"} alt={toolkit} />
          )
        })}
        <img className='project-icon' src={"src/assets/" + project.icon} alt={project.name} />
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
                    <img className="logo" src="src/assets/linkedinBlackLogo.png" alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/ColdCoder92" target="_blank">
                    <img className="logo" src="src/assets/githubBlackLogo.png" alt="GitHub Icon" />
                </a>
                <a href="mailto:lucasrodriguez1002@proton.me">
                    <img className="logo" src="src/assets/emailBlackLogo.png" alt="Email Icon" />
                </a>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  )
}

export default Projects