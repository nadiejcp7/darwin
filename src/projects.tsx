import BodyProjects from './body/BodyProjects';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
}

export default function Projects({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={'./assets/phone.png'} map={'./assets/map.png'} />
            <BodyProjects />
            <Footer indexSelected={indexSelected} />
        </>
    );
}