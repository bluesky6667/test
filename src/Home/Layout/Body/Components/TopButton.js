import React from 'react';
import {connect} from 'react-redux';
import styles from "../../../../assets/custom/Home.module.css";
import * as menuActions from "../../../../reducers/Menus";

class TopButton extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.selectMenu('_home');
        document.documentElement.scrollTo(0, 0)
    }

    render() {
        return (
            <button className={styles['top-button']} onClick={this.handleClick}>
                <i className={`lnr-arrow-up btn-icon-wrapper ${styles['font-x2']}`}></i>
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectMenu: (selectedMenu) => dispatch(menuActions.selectMenu(selectedMenu))
});

export default connect(null, mapDispatchToProps)(TopButton);