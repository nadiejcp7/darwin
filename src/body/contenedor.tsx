interface Props {
    imsg: string;
    title: string;
    subtitle: string;
    description: string[];
    imageFirst: boolean;
    check?: string
}

export default function Contenedor({ imsg, title, subtitle, description, imageFirst, check }: Props) {

    if (Number(window.innerWidth) < 860) {
        imageFirst = true;
    }

    const paragraph = (text: string) => (
        <p className="activities-container-text" key={text}>
            {text}
        </p>
    )

    const checkList = (text: string) => (
        <div className="activities-container-checklist">
            <img src={check} alt="" width={'20px'} height={'20px'} />
            <p className="activities-container-checklist-text">{text}</p>
        </div>
    )

    const image = () => (
        <div className="hidden activities-container-image">
            <img src={imsg} alt="" className="images-container alone" />
        </div>
    );

    const text = () => (
        <div className="hidden activities-container-info">
            {description.map((item) => (
                check ? checkList(item) : paragraph(item)
            ))}
        </div>
    );

    return (
        <div className="activities-container">
            <div className="activities-subcontainer">
                <div className="activities-container-titles">
                    <h2 className="activities-container-title">{title}</h2>
                    <h3 className="activities-container-subtitle"><i>{subtitle}</i></h3>
                </div>
                <div className="activities-container-content">
                    {imageFirst ? image() : text()}
                    {!imageFirst ? image() : text()}
                </div>
            </div>
        </div>
    );
};
