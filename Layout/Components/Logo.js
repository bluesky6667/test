import React from 'react';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="app-header__logo"
                    onClick={() => {
                        window.location.reload();
                    }}>
                    <div className="logo-src"/>
                </div>
            </>
        )
    }
}

export default HeaderLogo;