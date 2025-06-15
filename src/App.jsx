import {  HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import './App.css'

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
