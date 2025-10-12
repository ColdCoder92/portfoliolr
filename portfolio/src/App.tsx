import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
// Import All Images from Assets
import './assets/JAZA.png'
import './assets/asp.netcore-logo.png'
import './assets/csharp-logo.png'
import './assets/javascript-logo.png'
import './assets/linkedinBlackLogo.png'
import './assets/githubBlackLogo.png'
import './assets/emailBlackLogo.png'
import './assets/equationSolverPreview.png'
import './assets/darknessStoryCover.png'
import './assets/flagOnHill.png'
import './assets/selfie.jpg'
import './assets/css-logo.png'
import './assets/html-logo.png'
import './assets/docker-logo.png'
import './assets/godot-logo.png'
import './assets/java-logo.png'
import './assets/mssqlserver-logo.png'
import './assets/unity-logo.png'
import './assets/xunit-logo.png'
import './assets/react-logo.png'
import './assets/jest-logo.png'
import './assets/ms azure-logo.png'
import './assets/javascript-logo.png'
import './assets/preplitLogo.png'
import './assets/python-logo.png'
import './assets/startuplifeLogo.png'
import './assets/typescript-logo.png'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
