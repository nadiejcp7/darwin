import BodyServices from './body/BodyServices';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
}

export default function Services({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={'./assets/phone.png'} map={'./assets/map.png'} />
            <BodyServices />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
