import './footer.css'
import Navigator from './Navigator';

interface Props {
    indexSelected: number
}

function footer({ indexSelected }: Props) {
    const elementsNav = ['Home', 'About', 'Services', 'Projects', 'Contact'];
    const hrefsNav = ['/home', '/about', '/services', '/projects', '/contact'];

    const elementsContact = ['(289) 681-3004', 'darwinconstruction@outlook.com', '310 Barton St E Hamilton, ON']
    const contactSrc = ['./public/phoneBlack.png', './public/mailBlack.png', './public/mapBlack.png']
    const hrefsContact = ['tel:+12896813004', 'mailto:darwinconstruction@outlook.com', 'https://maps.app.goo.gl/hDeMg2C1bCQN6SsT7']

    const elementsSocial = ['YouTube', 'TikTok', 'Instagram', 'Facebook', 'LinkedIn']
    const socialSrc = ['./public/Youtube.png', './public/TikTok.png', './public/Instagram.png', './public/Facebook.png', './public/LinkedIn.png']
    const hrefSocial = ['YouTube', 'TikTok', 'Instagram', 'Facebook', 'LinkedIn']

    return (<>
        <div className='hidden footer-container'>
            <div className='footer-subcontainer'>
                <div className='contact-last'>
                    <a href='tel:+12896813004' target='_blank'>
                        <h2 className='title-footer'>Claim a Free Consult</h2>
                    </a>
                    <h3 className='subtitle-footer'>Trusted by homeowners nationwide</h3>
                </div>
                <div className='hidden footer-container-info'>
                    <div className='footer-container-info-description'>
                        <div className='footer-logo-container'>
                            <a href='/home'><img src="./public/logo.png" alt="" className='footer-logo' /></a>
                        </div>
                        <p className='catchy-phrase-bottom'>Your vision, our expertise. Let's create extraordinary things together.</p>
                    </div>
                    <Navigator title='Navigator' elements={elementsNav} hrefs={hrefsNav} newPage={false} indexSelected={indexSelected} />
                    <Navigator title='Contact Us' elements={elementsContact} hrefs={hrefsContact} imgs={contactSrc} />
                    <Navigator title='Social Media' elements={elementsSocial} hrefs={hrefSocial} imgs={socialSrc} />
                </div>
            </div>
        </div>
    </>);
}

export default footer;