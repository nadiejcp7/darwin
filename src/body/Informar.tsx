interface Props {
    title: string[]
    subtitle: string[]
    description: string[]
}

function Informar({ title, subtitle, description }: Props) {

    return (
        <>
            <div className='hidden info-container'>
                <div className="info-subcontainer">
                    <h2 className="services-container-title">ABOUT US</h2>
                    <div className="info-subcontainer-all">
                        {title.map((item, index) =>
                            <a className="hidden info-subcontainer-wrap" href="/about" key={index}>
                                <h3 className="services-container-title">{item}</h3>
                                <h4 className="info-subcontainer-subtitle"><i>{subtitle[index]}</i></h4>
                                <p className="info-subcontainer-description">{description[index]}</p>
                            </a>
                        )}
                    </div>
                    <a className="learnMore" href="./about"> Learn More </a>
                </div>
            </div>
        </>
    );
}

export default Informar;