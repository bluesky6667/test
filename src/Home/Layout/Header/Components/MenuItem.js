import React from 'react';
import styles from '../../../../assets/home/Header.module.css';
import cx from 'classnames';
import * as menuActions from "../../../../reducers/Menus";
import {connect} from "react-redux";

class MenuItem extends React.Component {
    handleSelectMenu = (selectedMenu) => {
        this.props.selectMenu(selectedMenu);
    }
    render() {
        const {
            menuId,
            menuLabel,
            active
        } = this.props;
        const {
            handleSelectMenu
        } = this;
        return (
            <>
                <a
                    href={`#${menuId}`} menuid={menuId}
                    className={cx('nav-link', (active && styles.active), styles['header-menu'])}
                    onClick={() => handleSelectMenu(menuId)}
                >{menuLabel}</a>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectMenu: (selectedMenu) => dispatch(menuActions.selectMenu(selectedMenu))
});

export default connect(null, mapDispatchToProps)(MenuItem);