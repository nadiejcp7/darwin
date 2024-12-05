import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import phone from './assets/phone.png';
import map from './assets/map.png';

interface Props {
    indexSelected: number
    logo: string
}

export default function Home({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={phone} map={map} />
            <Body />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
