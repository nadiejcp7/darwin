import './body.css'
import Contenedor from './contenedor'
import Informacion from './informacion';
import ContactBar from './ContactBar';
import Inicio from './Inicio';


import { useEffect } from "react";


export default function BodyServices() {

    const projects = ['Small-Rise', 'Mid-Rise', 'Custom Houses']
    const linksProjects = ["./public/smallRise.jpg", "./public/midRise.jpg", "./public/HOME1.jpg"]
    const projectsDescriptions = ['We specialize in crafting charming and functional small-rise communities. These developments are perfect for families and individuals seeking modern, well-designed homes in cozy, close-knit neighborhoods.',
        'Our mid-rise subdivisions combine spacious living with urban convenience. Designed for versatility and comfort, these developments offer a balance between community charm and modern amenities.',
        'Bring your dream home to life with our custom house services. From concept to completion, we work closely with you to design and build a home that reflects your unique style and meets your specific needs.']

    const msgs = (
        <>
            From top-tier equipment rentals to crafting modern commercial spaces.
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
            <Inicio msg={msgs} imgSrc="./public/backgroundServices.jpeg" />
            <Contenedor imsg="./public/rental.jpeg" title="Reliable Equipment for Every Construction Need"
                subtitle='Flexible Options to Suit Your Project'
                description={["Cost-Effectiveness", "Access to Modern Technology", "Flexibility for Short-Term Projects",
                    "Reduced Maintenance and Storage Costs", "Wide Variety of Options", "Try Before You Buy", "Quick Availability"]}
                imageFirst={true} isList={true} />
            <Contenedor imsg="./public/houses.jpeg" title='Building Homes, Building Futures'
                subtitle='Crafting High-Quality Homes with Attention to Detail'
                description={["At Darwin Construction Inc, we are dedicated to creating homes that are more than just structures; they are places where families can grow and create lasting memories. Our housing construction services focus on delivering high-quality homes built with the latest materials and techniques to ensure durability, comfort, and safety. From modern single-family homes to multi-unit complexes, we tailor every project to meet the unique needs of our clients while adhering to local building codes and regulations.",
                    "We understand that the home-building process can be overwhelming, which is why our team works closely with clients at every stage, from design to completion. Our expert project managers oversee each project with precision, ensuring timelines are met, costs are controlled, and the final result exceeds expectations. Whether you're building your first home or your forever home, we are committed to bringing your vision to life, creating spaces that enhance your lifestyle and stand the test of time."]}
                imageFirst={false} />
            <Contenedor imsg="./public/commercial.jpeg" title='Key Considerations for Commercial Buildings'
                subtitle='Ensuring Quality, Efficiency, and Sustainability in Every Project'
                description={["Comprehensive Planning and Design", "Building Code Compliance", "Efficient Space Utilization",
                    "Sustainable Construction Practices", "High-Quality Materials", "Advanced Technology Integration", "On-Time and On-Budget Delivery"]}
                imageFirst={true} isList={true} />
            <ContactBar msg='Ready to build together?' />
            <Informacion title="CHECK OUR PROJECTS" imgs={linksProjects} titles={projects} descriptions={projectsDescriptions} buttonRef={'/projects'} />

        </>);
}
