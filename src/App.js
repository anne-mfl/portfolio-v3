import './App.css';
import Navbar from 'components/Navbar';
import Bento from 'components/Bento';
import { Routes, Route } from 'react-router-dom'
import Experience from 'pages/Experience';
import Projects from 'pages/Projects';
import Footer from 'components/Footer';

function App() {
  return (
    <div className='bg-custom_ivory text-custom_brown font-open_sans'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bento />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
