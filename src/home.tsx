import Body from './body/Body';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    indexSelected: number
}

export default function Home({ indexSelected }: Props) {
    return (
        <>
            <Header indexSelected={indexSelected} />
            <Body />
            <Footer indexSelected={indexSelected} />
        </>
    );
}
