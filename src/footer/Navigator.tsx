import './footer.css'

interface Props {
    title: string
    elements: string[]
    hrefs: string[]
    imgs?: string[]
    newPage?: boolean
    indexSelected?: number
}


function Navigator({ title, elements, hrefs, imgs, newPage = true, indexSelected = -1 }: Props) {
    const renderImage = (src: string, index: number) => (
        <img src={src} alt={`${index} Icon`} key={index} width={'20px'} height={'20px'} className='footer-social-logo' />
    );

    return (<>
        <div className="footer-container-info-navigator">
            <h3 className='footer-container-title'>{title}</h3>
            <div className="footer-links-container">
                {elements.map((item, index) => (
                    <a className={"footer-link " + (index == indexSelected && 'selected')} href={hrefs[index]} key={item} target={newPage ? '_blank' : '_self'}>
                        {imgs && renderImage(imgs[index], index)}
                        {item}
                    </a>
                ))}
            </div>
        </div>
    </>);
}

export default Navigator;