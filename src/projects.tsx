import BodyProjects from './body/BodyProjects';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
    phoneHeader: string
    mapHeader: string

    socialSrc: string[]
    contactSrc: string[]
}

export default function Projects({ indexSelected, logo, phoneHeader, mapHeader, socialSrc, contactSrc }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={phoneHeader} map={mapHeader} />
            <BodyProjects />
            <Footer indexSelected={indexSelected} logo={logo} socialSrc={socialSrc} contactSrc={contactSrc} />
        </>
    );
}