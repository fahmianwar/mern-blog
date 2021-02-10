import React from 'react'
import './footer.scss'
import { ICFacebook, ICGithub, ICInstagram, ICTwitter, Logo } from '../../../assets'

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-socialmedia" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" width="100px" src={Logo} alt="Logo" />
                    <p>SaungCode</p>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
