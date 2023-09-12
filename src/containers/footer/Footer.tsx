import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>9 W 53rd St, New York, NY 10019, USA, <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>9 W 53rd St, New York, NY 10019, USA</p>
                <p>+1 212-344-1230</p>
                <p>info@payme.net</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2022 GPT-3. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;