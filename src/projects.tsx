import './body/body.css'
import Contenedor from './body/contenedor'
import Informacion from './body/informacion';
import ContactBar from './body/ContactBar';
import Inicio from './body/Inicio';

import { useEffect } from "react";

import truss from "./assets/truss.jpeg"
import floor from "./assets/floor.jpg"
import wall from "./assets/wall.jpeg"
import customHomes2 from "./assets/customHomes2.jpeg";
import background from "./assets/backgroundAbout.jpeg"
import midRise2 from "./assets/midRise2.jpeg"
import smallRise2 from "./assets/smallRise2.jpeg"

interface Props {
    servicesSrc: string[]
    sierra: string
    check: string
}
export default function Projects({ servicesSrc, sierra, check }: Props) {

    const buildingsTitles = ['ROOF TRUSSES', 'FLOOR JOISTS', 'WALL PANELS']
    const buildingsSrc = [truss, floor, wall]
    const buildingsDescriptions = ['Engineered wood roof trusses offer greater span capacity, strength, durability, and efficiency compared to traditional methods, making them economically and environmentally beneficial. They also simplify complex roofing designs, adding versatility to architectural projects.',
        'Our floor framework features wooden joists, spaced at regular intervals. These advanced joists control deflection and vibration, reduce squeaks, and often eliminate mid-bearing supports. The open web design efficiently routes utilities through the floor, making them strong and durable for any construction project.',
        'Wall panels simplify construction by providing pre-fabricated sections, enhancing structural integrity and improving insulation and soundproofing. They offer consistent quality control and reduce on-site labor, making them versatile and efficient for both residential and commercial projects.']

    const servicesTitles = ['RENT EQUIPMENT', 'COMMERCIAL CONSTRUCTION', 'SPECIALIZED SERVICES']
    const servicesDescriptions = ['Access high-quality construction equipment for your projects with flexible rental plans. From heavy machinery to specialized tools, we provide reliable solutions to meet your needs.',
        'Build modern, efficient, and durable commercial spaces tailored to your business goals. We specialize in hotels, houses, offices, retail stores, and industrial facilities with exceptional attention to detail.',
        'Transform your projects with our innovative and customized solutions. From green building techniques to interior design, we bring expertise to every detail.']

    const msgs = (
        <>
            Turning Dreams into Reality <br />
            One Project at a Time!
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
            <Contenedor imsg={midRise2} title="Mid-Rise Subdivisions: The Perfect Blend of Comfort and Convenience"
                subtitle='Enjoy Modern Living in Prime Locations with Accessible Amenities'
                description={["Prime Locations", "Space Efficiency", "Sustainable Living", "Modern Amenities",
                    "Affordable Luxury", "Community-Oriented", "Future Growth Potential"]}
                imageFirst={true} check={check} />
            <Contenedor imsg={customHomes2} title='Custom Homes: Tailored to Your Vision'
                subtitle='Designing Spaces that Reflect Your Unique Lifestyle'
                description={["Custom homes are the perfect solution for those who want their living space to be a true reflection of their personality and needs. From choosing the layout and materials to selecting the finishing touches, custom homes offer complete control over the design process.",
                    "This level of personalization allows homeowners to create a space that fits their family’s lifestyle, whether it’s an open-concept design for entertaining or a cozy retreat for relaxation. With the help of skilled architects and builders, every detail can be tailored to perfection, ensuring that the home is as functional as it is beautiful."]}
                imageFirst={false} />
            <ContactBar msg='Ready to build together?' />
            <Contenedor imsg={smallRise2} title="Crafting Vibrant Communities"
                subtitle='Key Elements That Make Small Rise Subdivisions Perfect for Modern Living'
                description={["Efficient Land Use", "Community-Oriented Design", "Affordable Housing Options", "Increased Privacy",
                    "Better Access to Amenities", "Sustainable Design Features", "Aesthetic Appeal"]}
                imageFirst={true} check={check} />
            <Informacion title="BUILDING COMPONENTS" imgs={buildingsSrc} titles={buildingsTitles} descriptions={buildingsDescriptions} />
            <Informacion title="CHECK OUR SERVICES" imgs={servicesSrc} titles={servicesTitles} descriptions={servicesDescriptions} buttonRef={'/services'} />

        </>);
}
