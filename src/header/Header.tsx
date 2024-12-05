import { useState } from 'react';
import './header.css'

interface Props {
    existsButton?: boolean
    indexSelected: number
}

export default function header({ existsButton = true, indexSelected }: Props) {
    const elements = ['Home', 'About', 'Services', 'Projects', 'Contact'];
    const links = ['./home', './about', './services', './projects', './contact'];

    const [opened, setOpened] = useState(false)

    return (<>
        <div className='header-container'>
            <div className='header-container-1'>
                <div className='general-data'>
                    <a href='tel:+12896813004' target='_blank' className='items-header add-border'>
                        <img src="./public/phone.png" alt="Phone Icon" width={'20px'} height={'20px'} />
                        (289) 681-3004
                    </a>
                    <a href='https://maps.app.goo.gl/hDeMg2C1bCQN6SsT7' target='_blank' className='items-header'>
                        <img src="./public/map.png" alt="Location Icon" width={'20px'} height={'20px'} />
                        310 Barton St E Hamilton, ON
                    </a>
                </div>
                <a href='./home'><h1 className='title'>DARWIN CONSTRUCTION INC</h1></a>
            </div>
            <div className='header-container-2'>
                <a href="./home" className='logo-container'>
                    <img className='logo-image' src="./public/logo.png" alt="Darwin Construction Logo" />
                </a>
                <div className='links-container'>
                    {elements.map((item, index) =>
                        <a className={indexSelected === index ? 'link selected' : 'link'} href={links[index]}
                            key={item}>
                            {item}
                        </a>
                    )}
                </div>
                {existsButton && <a className='request-button' href='tel:+12896813004' target='_blank'>
                    REQUEST A QUOTE
                </a>}
                <div className='navbar'
                    onClick={() => {
                        const childElement = document.querySelector('.links-container');
                        if (childElement) {
                            childElement.className = 'links-container open';
                            const currentParent = document.querySelector('.header-container-2');
                            const newParent = document.querySelector('.header-container');
                            if (currentParent && newParent) {
                                if (currentParent.contains(childElement)) {
                                    currentParent.removeChild(childElement);
                                    newParent.appendChild(childElement);
                                }
                            }
                            const isNowOpened = !opened;
                            setOpened(isNowOpened);
                            childElement.className = isNowOpened ? 'links-container open' : 'links-container close';
                        }
                    }
                    }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div >
    </>);
};