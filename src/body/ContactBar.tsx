interface Props {
    msg: string
}

function ContactBar({ msg }: Props) {

    return (
        <>
            <div className="hidden contacto-container">
                <div className="hidden contacto-subcontainer">
                    <h3 className="contacto-container-text">{msg}</h3>
                    <a className="contacto-container-link" href="tel:+12896813004">Time to chat</a>
                </div>
            </div>
        </>
    );
}

export default ContactBar;