import './App.css';
import Home from './home';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './notFound';
import Services from './services';
import Projects from './projects';
import Contact from './contact';

import logo from './assets/logo.png';

export default function App() {

  return (
    <BrowserRouter basename='/darwin/'>
      <Routes>
        <Route index element={<Home indexSelected={0} logo={logo} />} />
        <Route path="/home" element={<Home indexSelected={0} logo={logo} />} />
        <Route path="/about" element={<About indexSelected={1} logo={logo} />} />
        <Route path="/services" element={<Services indexSelected={2} logo={logo} />} />
        <Route path="/projects" element={<Projects indexSelected={3} logo={logo} />} />
        <Route path="/contact" element={<Contact indexSelected={4} logo={logo} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
