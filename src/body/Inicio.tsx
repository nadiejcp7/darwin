import { ReactNode } from "react";

interface Props {
    msg: ReactNode
    imgSrc: string
    sierra: string
}

function Inicio({ msg, imgSrc, sierra }: Props) {

    const divStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '900px',
    };

    return (
        <>
            <div className="hidden inicio-container-Big">
                <div className="inicio-container" style={divStyle}>
                    <div className="inicio-subcontainer">
                        <div className="inicio-subcontainer-title">
                            <h1 className="inicio-container-title">{msg}</h1>
                        </div>
                        <a className="hidden saw-container" href="tel:+12896813004">
                            <img src={sierra} alt="Saw Blade" className="saw-blade" />
                        </a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Inicio;