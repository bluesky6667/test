import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="app-footer" style={{backgroundColor: '#e67e22'}}>
                    <div className="app-footer__inner">
                        <div className="app-footer-left">
                            <div>
                                <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '0px'}}>IndoorPlus+는</h6>
                                <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '0px'}}><b style={{color: '#212529'}}>People&Technology</b>의 제품입니다.</h6>
                            </div>
                        </div>
                        <div className="app-footer-right">
                        </div>
                    </div>
                </div>
            </>
        )}
}

export default Footer;