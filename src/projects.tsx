import BodyProjects from './body/BodyProjects';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
}

export default function Projects({ indexSelected }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} />
            <BodyProjects />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
