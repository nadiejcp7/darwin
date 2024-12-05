import { useEffect } from 'react';

import './body/body.css'
import './body/contact.css'

interface Props {
    phone: string
    mail: string
    map: string
}

export default function Contact({ phone, mail, map }: Props) {
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

    const hours = ['8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '9:00 - 14:00'];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

    return (
        <>
            <div className='contact-container'>
                <div className='contact-container2'>
                    <div className='contact-title'>
                        <div className='contact-title-sub'>
                            GET IN TOUCH
                        </div>
                    </div>
                    <div className='contact-subcontainer'>
                        <div className='contact-subcontainer2'>
                            <div className='contact-officeHours'>
                                <p className='working-Hours-title'>Office hours</p>
                                {days.map((item, index) => (
                                    <>
                                        <div className='working-Hour'>
                                            <p className='working-Hour-day'>{item + ':'}</p>
                                            <p className='working-Hour-hours'><i>{hours[index]}</i></p>
                                        </div>
                                    </>
                                )
                                )}
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1123.6343240667677!2d-79.8530841!3d43.2606538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b8b2a234d1d%3A0xdb640b40931afaf8!2s310%20Barton%20St%20E%2C%20Hamilton%2C%20ON%20L8L%202X5%2C%20Canad%C3%A1!5e1!3m2!1ses-419!2sec!4v1733336472114!5m2!1ses-419!2sec" width="400" height="300" loading="lazy" className='map'></iframe>
                            <div className='contact-info'>
                                <div className='contact-general-button'>
                                    <a className='request-button appear' href='tel:+12896813004' target='_blank'>
                                        SCHEDULE AN APPOINTMENT
                                    </a>
                                </div>
                                <div className="contact-general-data">
                                    <a href="tel:+12896813004" target="_blank" className="items-header no-border">
                                        <img src={phone} alt="Phone Icon" width="20px" height="20px" />
                                        (289) 681-3004
                                    </a>
                                </div>
                                <div className="contact-general-data">
                                    <a href="mailto:darwinconstruction@outlook.com" target="_blank" className="items-header no-border">
                                        <img src={mail} alt="Location Icon" width="20px" height="20px" />
                                        darwinconstruction@outlook.com
                                    </a>
                                </div>
                                <div className="contact-general-data">
                                    <a href="https://maps.app.goo.gl/hDeMg2C1bCQN6SsT7" target="_blank" className="items-header no-border">
                                        <img src={map} alt="Location Icon" width="20px" height="20px" />
                                        310 Barton St E Hamilton, ON
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
