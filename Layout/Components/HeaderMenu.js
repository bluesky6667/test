import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import styles from '../../../assets/custom/home.module.css';

import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../../reducers/ThemeOptions';

class HeaderMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '_home',
            mobile: false,
            activeSecondaryMenuMobile: false,
            menus: [{label: '홈', id: '_home'},
                {label: 'RTLS', id: 'rtls'},
                {label: 'LBS', id: 'lbs'},
                {label: '공지사항', id: 'noti'},
                {label: '문의하기', id: 'contact'},
            ]
        };
    }

    render() {
        const menus = this.state.menus.map(menu =>
            <a href={`#${menu.id}`} key={`${menu.id}`} className={`nav-link ${this.state.active === menu.id ? styles.active : ''} ${styles.headermenu}`}>{menu.label}</a>
        );

        return (
            <>
                <ul className="nav">
                    {menus}
                </ul>
            </>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenus);