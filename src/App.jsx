//joelgilger.com
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/homepage';


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <div>{<Nav/>}</div>
    <div className='main-content'>
    <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
    </Routes>
    </div>
    </BrowserRouter>
    
    </>
    
  )
};


export default App;
