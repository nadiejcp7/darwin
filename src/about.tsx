import BodyAbout from './body/BodyAbout';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
}

export default function About({ indexSelected }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} />
            <BodyAbout />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
