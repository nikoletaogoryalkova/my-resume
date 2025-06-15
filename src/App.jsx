import {  HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'

import './App.css'

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
