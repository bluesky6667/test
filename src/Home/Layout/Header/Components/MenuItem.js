import React from 'react';
import styles from '../../../../assets/custom/Home.module.css';
import * as menuActions from "../../../../reducers/Menus";
import {connect} from "react-redux";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
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
                    className={`nav-link ${active && styles.active} ${styles.headermenu}`}
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