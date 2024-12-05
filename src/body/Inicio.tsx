import { ReactNode } from "react";

interface Props {
    msg: ReactNode
    imgSrc: string
}

function Inicio({ msg, imgSrc }: Props) {

    const divStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover', // Example styling
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px',
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
                            <img src="./public//sierra.png" alt="Saw Blade" className="saw-blade" />
                        </a>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Inicio;