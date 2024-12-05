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
            <Header indexSelected={indexSelected} existsButton={false} logo={logo} />
            <BodyServices />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
