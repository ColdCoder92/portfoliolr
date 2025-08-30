import React from 'react'
import NavBar from './shared/NavBar'
import { Container, Grid } from '@mui/material'

function Projects() {
  return (
    <div>
      <NavBar />
      <h1>Projects</h1>
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