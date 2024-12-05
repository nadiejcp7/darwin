import BodyServices from './body/BodyServices';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
}

export default function Services({ indexSelected }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} />
            <BodyServices />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
