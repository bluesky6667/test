import React from 'react';
import { IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoYoutube,
    IoLogoRss,
    IoLogoTwitter,
    IoLogoTumblr } from "react-icons/io";
import LogoWrapper from "./Components/LogoWrapper";
import styles from '../../../assets/custom/Home.module.css';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="app-footer" style={{backgroundColor: '#e67e22'}}>
                    <div className="app-footer__inner">
                        <div className="app-footer-left">
                            <div className={styles.logofooter}></div>
                            <div>
                                <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '0px'}}>IndoorPlus+는</h6>
                                <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '0px'}}><b style={{color: '#212529'}}>People&Technology</b>의 제품입니다.</h6>
                            </div>
                        </div>
                        <div className="app-footer-right">
                            <LogoWrapper sns={'facebook'}><IoLogoFacebook size="24" color="#fff" /></LogoWrapper>
                            <LogoWrapper sns={'linkedin'}><IoLogoLinkedin size="24" color="#fff" /></LogoWrapper>
                            <LogoWrapper sns={'youtube'}><IoLogoYoutube size="24" color="#fff" /></LogoWrapper>
                            <LogoWrapper sns={'rss'}><IoLogoRss size="24" color="#fff" /></LogoWrapper>
                            <LogoWrapper sns={'twitter'}><IoLogoTwitter size="24" color="#fff" /></LogoWrapper>
                            <LogoWrapper sns={'tumblr'}><IoLogoTumblr size="24" color="#fff" /></LogoWrapper>
                        </div>
                    </div>
                </div>
            </>
        )}
}

export default Footer;