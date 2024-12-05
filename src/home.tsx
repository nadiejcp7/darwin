import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';
import phone from './assets/phone.png';

interface Props {
    indexSelected: number
    logo: string
}

export default function Home({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} phone={phone} map={'./assets/map.png'} />
            <Body />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
