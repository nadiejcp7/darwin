import BodyAbout from './body/BodyAbout';
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
export default function About({ indexSelected, logo, phoneHeader, mapHeader, socialSrc, contactSrc }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={phoneHeader} map={mapHeader} />
            <BodyAbout />
            <Footer indexSelected={indexSelected} logo={logo} socialSrc={socialSrc} contactSrc={contactSrc} />
        </>
    );
}