import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
    logo: string
}

export default function Home({ indexSelected, logo }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} logo={logo} />
            <Body />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
