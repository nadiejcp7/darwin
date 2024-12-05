import BodyContact from './body/BodyContact';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
}

export default function Contact({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={'./assets/phone.png'} map={'./assets/map.png'} />
            <BodyContact />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
