import './App.css';
import Home from './home';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './notFound';
import Services from './services';
import Projects from './projects';
import Contact from './contact';
import Header from './header/Header';
import Footer from './footer/Footer';

import logo from './assets/logo.png';
import phoneHeader from './assets/phone.png';
import mapHeader from './assets/map.png';
import mail from './assets/mail.png'

import yt from './assets/YouTube.png';
import tk from './assets/TikTok.png'
import ig from './assets/Instagram.png'
import fb from './assets/Facebook.png'
import lkn from './assets/LinkedIn.png'

import pb from './assets/phoneBlack.png'
import mb from './assets/mailBlack.png'
import mp from './assets/mapBlack.png'


import smallRise from "./assets/smallRise.jpg"
import midRise from "./assets/midRise.jpg"
import home from "./assets/HOME1.jpg"

import sierra from "./assets/sierra.png"
import check from "./assets/check.png"

import rent from "./assets/rent.jpeg"
import commercial from "./assets/image1.webp"
import sustainable from "./assets/sustainable.jpeg"

const socialSrc = [yt, tk, ig, fb, lkn]
const contactSrc = [pb, mb, mp]
const projectsSrc = [smallRise, midRise, home]
const servicesSrc = [rent, commercial, sustainable]

export default function App() {

  return (
    <BrowserRouter basename='/darwin/'>
      <Routes>
        <Route index element={<HomeApp indexSelected={0} />} />
        <Route path="/home" element={<HomeApp indexSelected={0} />} />
        <Route path="/about" element={<AboutApp indexSelected={1} />} />
        <Route path="/services" element={<ServicesApp indexSelected={2} />} />
        <Route path="/projects" element={<ProjectsApp indexSelected={3} />} />
        <Route path="/contact" element={<ContactApp indexSelected={4} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

interface Props {
  indexSelected: number
}

function HeaderApp({ indexSelected }: Props) {
  return (
    <>
      <Header indexSelected={indexSelected} logo={logo} phone={phoneHeader} map={mapHeader} />
    </>
  );
}


function FooterApp({ indexSelected }: Props) {
  return (
    <>
      <Footer indexSelected={indexSelected} logo={logo} socialSrc={socialSrc} contactSrc={contactSrc} />
    </>
  );
}

function HomeApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <Home projectsSrc={projectsSrc} servicesSrc={servicesSrc} sierra={sierra} check={check} />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}

function AboutApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <About projectsSrc={projectsSrc} servicesSrc={servicesSrc} sierra={sierra} />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}

function ServicesApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <Services projectsSrc={projectsSrc} sierra={sierra} check={check} />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}

function ProjectsApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <Projects servicesSrc={servicesSrc} sierra={sierra} check={check} />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}

function ContactApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <Contact phone={phoneHeader} mail={mail} map={mapHeader} />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}