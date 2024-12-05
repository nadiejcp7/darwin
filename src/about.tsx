import Contenedor from './body/contenedor'
import Informacion from './body/informacion';
import ContactBar from './body/ContactBar';
import Inicio from './body/Inicio';

import { useEffect } from "react";

import './body/body.css'

import story from "./assets/story.jpeg"
import focus from "./assets/focus.jpeg"
import wedo from "./assets/wedo.jpeg"
import background from "./assets/backgroundAbout.jpeg"
import mission from "./assets/mission.jpeg"
import vision from "./assets/vision.jpeg"

interface Props {
    projectsSrc: string[]
    servicesSrc: string[]
    sierra: string
}

export default function About({ projectsSrc, servicesSrc, sierra }: Props) {

    const informarTitles = ['OUR STORY', 'OUR FOCUS', 'WHAT WE DO']
    const informarDescriptions = ['Our journey began with a simple goal: to bring innovative solutions that improve lives. Founded in 2000, we have grown into a team passionate about creating sustainable, customer-focused solutions. At our core, we believe in transparency, collaboration, and constant innovation to achieve outstanding results for our clients and the community.',
        'We are a team of innovators, problem-solvers, and industry experts dedicated to exceeding expectations. From our leadership to our incredible staff, each member plays a vital role in our success. Collaboration and creativity drive everything we do, ensuring our solutions are as dynamic as our people.',
        'At Darwin Construction Inc, our customers are at the heart of everything we do. For over a decade, we have partnered with individuals and businesses to deliver tailored solutions that drive results. Our focus is on building lasting relationships through exceptional service, innovative thinking, and a relentless dedication to your success.']
    const informarLinks = [story, focus, wedo]

    const projects = ['Small-Rise', 'Mid-Rise', 'Custom Houses']
    const projectsDescriptions = ['We specialize in crafting charming and functional small-rise communities. These developments are perfect for families and individuals seeking modern, well-designed homes in cozy, close-knit neighborhoods.',
        'Our mid-rise subdivisions combine spacious living with urban convenience. Designed for versatility and comfort, these developments offer a balance between community charm and modern amenities.',
        'Bring your dream home to life with our custom house services. From concept to completion, we work closely with you to design and build a home that reflects your unique style and meets your specific needs.']

    const servicesTitles = ['RENT EQUIPMENT', 'COMMERCIAL CONSTRUCTION', 'SPECIALIZED SERVICES']
    const servicesDescriptions = ['Access high-quality construction equipment for your projects with flexible rental plans. From heavy machinery to specialized tools, we provide reliable solutions to meet your needs.',
        'Build modern, efficient, and durable commercial spaces tailored to your business goals. We specialize in hotels, houses, offices, retail stores, and industrial facilities with exceptional attention to detail.',
        'Transform your projects with our innovative and customized solutions. From green building techniques to interior design, we bring expertise to every detail.']

    const msgs = (
        <>
            With 20+ years of experience where expertise meets dedication to deliver extraordinary results.
        </>
    );

    const handleScroll = () => {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    };

    useEffect(() => {
        // Check on scroll
        window.addEventListener('scroll', handleScroll);

        // Call once on page load to handle any already visible elements
        handleScroll();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array, so it runs once after component mounts


    return (
        <>
            <Inicio msg={msgs} imgSrc={background} sierra={sierra} />
            <Informacion title="WHO WE ARE" imgs={informarLinks} titles={informarTitles} descriptions={informarDescriptions} />
            <Contenedor imsg={mission} title="Our Mission"
                subtitle='Building Foundations, Shaping Futures'
                description={["At the heart of our company lies a commitment to creating durable, high-quality structures that stand the test of time. We believe in delivering innovative construction solutions tailored to meet the unique needs of our clients. Whether it's crafting custom homes or managing large-scale commercial projects, our mission is to exceed expectations through precision, expertise, and attention to detail.",
                    "We are driven by a passion for sustainability and community growth. By integrating eco-friendly practices and utilizing cutting-edge technology, we aim to construct spaces that are not only functional but also inspire. Our mission is to leave a lasting legacy by building structures that support thriving communities and pave the way for future generations."]}
                imageFirst={true} />
            <Contenedor imsg={vision} title='Our Vision'
                subtitle='Constructing a Better Tomorrow'
                description={["We envision a future where innovative design and sustainable practices redefine the construction industry. Our goal is to be a trusted leader in creating spaces that blend functionality with aesthetic excellence, meeting the evolving needs of clients and communities alike. By embracing advanced technologies and fostering a culture of continuous improvement, we strive to set new benchmarks in quality and efficiency.",
                    "Our vision extends beyond building structures; it’s about building relationships and empowering communities. We aim to inspire trust and deliver value in every project, becoming a cornerstone of progress and resilience. As we grow, our focus remains on creating a lasting impact—developing spaces that enhance lives and contribute to a brighter, more sustainable future."]}
                imageFirst={false} />

            <ContactBar msg='Ready to build together?' />
            <Informacion title="CHECK OUR SERVICES" imgs={servicesSrc} titles={servicesTitles} descriptions={servicesDescriptions} buttonRef={'/services'} />
            <Informacion title="CHECK OUR PROJECTS" imgs={projectsSrc} titles={projects} descriptions={projectsDescriptions} buttonRef={'/projects'} />

        </>);
}
