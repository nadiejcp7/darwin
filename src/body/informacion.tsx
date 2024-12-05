interface Props {
    title: string
    imgs: string[]
    titles: string[]
    descriptions: string[]
    buttonRef?: string
}

function Informacion({ title, imgs, titles, descriptions, buttonRef }: Props) {
    return (
        <>
            <div className="hidden services-container">
                <div className="services-subcontainer">
                    <h2 className="services-container-title">{title}</h2>
                    <div className="services-container-images">
                        {imgs.map((item, index) =>
                            <a className="hidden services-container-wrap" href={buttonRef} key={index}>
                                <img src={item} className="hidden images-container" />
                                <h3 className="services-container-wrap-title">{titles[index]}
                                </h3>
                                <p className="services-container-wrap-description">{descriptions[index]}
                                </p>
                            </a>
                        )}
                    </div>
                    {buttonRef && <a className="learnMore" href={buttonRef}> Learn More </a>}
                </div>
            </div>
        </>
    );
}

export default Informacion;