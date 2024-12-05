import './body.css'
import Contenedor from './contenedor'
import Informacion from './informacion';
import ContactBar from './ContactBar';
import Inicio from './Inicio';


import { useEffect } from "react";


export default function BodyProjects() {

    const projects = ['ROOF TRUSSES', 'FLOOR JOISTS', 'WALL PANELS']
    const linksProjects = ["./public/truss.jpeg", "./public/floor.jpg", "./public/wall.jpeg"]
    const projectsDescriptions = ['Engineered wood roof trusses offer greater span capacity, strength, durability, and efficiency compared to traditional methods, making them economically and environmentally beneficial. They also simplify complex roofing designs, adding versatility to architectural projects.',
        'Our floor framework features wooden joists, spaced at regular intervals. These advanced joists control deflection and vibration, reduce squeaks, and often eliminate mid-bearing supports. The open web design efficiently routes utilities through the floor, making them strong and durable for any construction project.',
        'Wall panels simplify construction by providing pre-fabricated sections, enhancing structural integrity and improving insulation and soundproofing. They offer consistent quality control and reduce on-site labor, making them versatile and efficient for both residential and commercial projects.']

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
            <Inicio msg={msgs} imgSrc="./public/backgroundAbout.jpeg" />
            <Contenedor imsg="./public/midRise2.jpeg" title="Mid-Rise Subdivisions: The Perfect Blend of Comfort and Convenience"
                subtitle='Enjoy Modern Living in Prime Locations with Accessible Amenities'
                description={["Prime Locations", "Space Efficiency", "Sustainable Living", "Modern Amenities",
                    "Affordable Luxury", "Community-Oriented", "Future Growth Potential"]}
                imageFirst={true} isList={true} />
            <Contenedor imsg="./public/customHomes2.jpeg" title='Custom Homes: Tailored to Your Vision'
                subtitle='Designing Spaces that Reflect Your Unique Lifestyle'
                description={["Custom homes are the perfect solution for those who want their living space to be a true reflection of their personality and needs. From choosing the layout and materials to selecting the finishing touches, custom homes offer complete control over the design process.",
                    "This level of personalization allows homeowners to create a space that fits their family’s lifestyle, whether it’s an open-concept design for entertaining or a cozy retreat for relaxation. With the help of skilled architects and builders, every detail can be tailored to perfection, ensuring that the home is as functional as it is beautiful."]}
                imageFirst={false} />
            <ContactBar msg='Ready to build together?' />
            <Contenedor imsg="./public/smallRise2.jpeg" title="Crafting Vibrant Communities"
                subtitle='Key Elements That Make Small Rise Subdivisions Perfect for Modern Living'
                description={["Efficient Land Use", "Community-Oriented Design", "Affordable Housing Options", "Increased Privacy",
                    "Better Access to Amenities", "Sustainable Design Features", "Aesthetic Appeal"]}
                imageFirst={true} isList={true} />
            <Informacion title="BUILDING COMPONENTS" imgs={linksProjects} titles={projects} descriptions={projectsDescriptions} />

        </>);
}
