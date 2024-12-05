import BodyAbout from './body/BodyAbout';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
}

export default function About({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={'./assets/phone.png'} map={'./assets/map.png'} />
            <BodyAbout />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
