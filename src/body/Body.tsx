import './body.css'
import Contenedor from './contenedor'
import Informar from './Informar';
import Informacion from './informacion';
import ContactBar from './ContactBar';
import Inicio from './Inicio';


import { useEffect } from "react";

function body() {

    const informarTitles = ['RENT EQUIPMENT', 'COMMERCIAL CONSTRUCTION', 'SPECIALIZED SERVICES']
    const informarDescriptions = ['Access high-quality construction equipment for your projects with flexible rental plans. From heavy machinery to specialized tools, we provide reliable solutions to meet your needs.',
        'Build modern, efficient, and durable commercial spaces tailored to your business goals. We specialize in hotels, houses, offices, retail stores, and industrial facilities with exceptional attention to detail.',
        'Transform your projects with our innovative and customized solutions. From green building techniques to interior design, we bring expertise to every detail.']
    const informarLinks = ["./public/rent.jpeg", "./public/image1.webp", "./public/sustainable.jpeg"]

    const indicadores = ['WHO WE ARE', 'OUR MISSION', 'OUR VISION']
    const subindicadores = ['A Team Built on Expertise and Passion', 'Building Excellence, Delivering Results', 'Shaping the Future of Construction']
    const indicadoresDescriptions = ["Our team of experienced professionals is dedicated to quality, safety, and customer satisfaction. We bring expertise in every aspect of construction, ensuring precision and reliability. Together, we aim to create not just buildings, but thriving communities.",
        "We provide high-quality, innovative construction solutions, focusing on efficiency, safety, and customer satisfaction. Every project is completed with integrity and craftsmanship. Our commitment is to deliver value and meet the unique needs of each client.",
        "We aim to be a leader in the construction industry by embracing cutting-edge technologies and sustainable practices. Our goal is to build lasting relationships and deliver projects that empower communities and businesses. Excellence, reliability, and trust define our vision."]

    const projects = ['Small-Rise', 'Mid-Rise', 'Custom Houses']
    const linksProjects = ["./public/smallRise.jpg", "./public/midRise.jpg", "./public/HOME1.jpg"]
    const projectsDescriptions = ['We specialize in crafting charming and functional small-rise communities. These developments are perfect for families and individuals seeking modern, well-designed homes in cozy, close-knit neighborhoods.',
        'Our mid-rise subdivisions combine spacious living with urban convenience. Designed for versatility and comfort, these developments offer a balance between community charm and modern amenities.',
        'Bring your dream home to life with our custom house services. From concept to completion, we work closely with you to design and build a home that reflects your unique style and meets your specific needs.']

    const msgs = (
        <>
            From foundation to finish. <br />
            We are with you every step of the way.
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
            <Inicio msg={msgs} imgSrc="./public/body.jpeg" />
            <Informacion title="CHECK OUR SERVICES" imgs={informarLinks} titles={informarTitles} descriptions={informarDescriptions} buttonRef={'/services'} />
            <Contenedor imsg="./public/expertise.jpeg" title="Our Team's Expertise and Certifications"
                subtitle='Certified Professionals Committed to Excellence'
                description={["Highly Skilled Professionals", "Relevant Certifications", "Industry-Standard Safety Training",
                    "Project Management Qualifications", "Specialized Expertise", "Commitment to Excellence", "Ongoing Learning and Development"]}
                imageFirst={true} isList={true} />
            <ContactBar msg='Eager to work together?' />
            <Informar title={indicadores} subtitle={subindicadores} description={indicadoresDescriptions} />
            <Contenedor imsg="./public/modern.jpeg" title='Specialized Knowledge in Modern Construction Techniques'
                subtitle='Innovative Solutions with Cutting-Edge Construction Methods'
                description={["Our team excels in utilizing cutting-edge construction techniques and technologies. From sustainable building practices to advanced modular construction methods, we are equipped with the expertise to bring complex, modern projects to life. Whether it's implementing energy-efficient systems or integrating smart building technologies, we pride ourselves on our ability to adapt to new challenges and provide innovative solutions.",
                    "Our specialists in concrete, steel, and wood frame construction ensure that we can deliver superior results across a diverse range of building projects, from residential to commercial developments."]}
                imageFirst={false} />

            <Informacion title="CHECK OUR PROJECTS" imgs={linksProjects} titles={projects} descriptions={projectsDescriptions} buttonRef={'/projects'} />

            <Contenedor imsg="./public/contractor.jpeg" title='How to Choose the Right Contractor' subtitle="Partnering with Experts for a Stress-Free Construction Experience"
                description={["Check Credentials and Licensing", "Review Past Work and References", "Evaluate Experience", "Get Multiple Quotes",
                    "Assess Communication Skills", "Check for Specialization", "Look for Warranty and After-Service Support"]}
                imageFirst={true} isList={true} />

            <Contenedor imsg="./public/trends.jpeg" title='Top 5 Construction Trends to Watch in 2024' subtitle='How We Lead the Way in Innovative Building Solutions'
                description={["The future of construction is here, and at Darwin Construction Inc, we are at the forefront of industry advancements. From sustainable building practices and modular designs to integrating smart technologies, our team adopts cutting-edge trends to meet modern demands.",
                    "These innovations not only streamline the construction process but also enhance the durability, efficiency, and appeal of your projects. Partner with us to build better, smarter, and greener structures in 2024 and beyond."]}
                imageFirst={false} />
        </>);
}

export default body;