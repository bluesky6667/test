import React from 'react';
import {connect} from 'react-redux';
import styles from "../../../../assets/home/Header.module.css";
import * as menuActions from "../../../../reducers/Menus";

class TopButton extends React.Component {
    handleClick = () => {
        this.props.selectMenu('_home');
        document.documentElement.scrollTo(0, 0);
        this.props.setEnableTopBtn(false);
    }

    render() {
        const {enableTopBtn} = this.props;
        return (
            enableTopBtn &&
            <button className={styles['top-button']} onClick={this.handleClick}>
                <i className={`lnr-arrow-up btn-icon-wrapper ${styles['font-x2']}`}></i>
            </button>
        )
    }
}

const mapStateToProps = state => ({
    enableTopBtn: state.Menus.enableTopBtn,
});
const mapDispatchToProps = dispatch => ({
    selectMenu: (selectedMenu) => dispatch(menuActions.selectMenu(selectedMenu)),
    setEnableTopBtn: (enableTopBtn) => dispatch(menuActions.setEnableTopBtn(enableTopBtn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopButton);