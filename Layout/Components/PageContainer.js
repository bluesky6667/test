import React from 'react';
import {connect} from 'react-redux';

import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../../reducers/ThemeOptions';
import {Button} from "reactstrap";
import styles from "../../../assets/custom/home.module.css";

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '_home',
            menus: [{label: '홈', id: '_home'},
                {label: 'RTLS', id: 'rtls'},
                {label: 'LBS', id: 'lbs'},
                {label: '공지사항', id: 'noti'},
                {label: '문의하기', id: 'contact'},
            ]
        };
    }

    render() {
        const pages = this.state.menus.map(menu =>
            <section id={menu.id} key={menu.id} className={`${styles.page} ${this.state.active === menu.id ? styles.active : ''}`}></section>
        );
        return (
            <>
                <div className={styles.pagecontainer}>
                    {pages}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);