import React from 'react';

class HeaderLogo extends React.Component {
    render() {
        return (
            <>
                <div className="app-header__logo"
                     onClick={() => {
                         window.location.replace('/');
                     }}>
                    <div className="logo-src"/>
                </div>
            </>
        )
    }
}

export default HeaderLogo;