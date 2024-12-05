import BodyContact from './body/BodyContact';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
}

export default function Contact({ indexSelected }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} existsButton={false} />
            <BodyContact />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
