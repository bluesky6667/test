import React from 'react';
import styles from "../../assets/custom/home.module.css";
import cx from 'classnames';
import {connect} from "react-redux";
import * as menuActions from "../../reducers/Menus";

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0,
            menusPosition: []
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handelScroll);
        const menusPosition = this.props.menus.map((menu) =>
            document.getElementById(menu.id).offsetTop
        );
        this.setState({menusPosition: menusPosition});
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handelScroll);
    }

    handelScroll = e => {
        const currPos = document.documentElement.scrollTop;
        const menusPosition = this.state.menusPosition;
        const menus = this.props.menus;
        for (let i = 0, len = menusPosition.length; i < len; i++) {
            if ( currPos < menusPosition[i] ) {
                this.props.selectMenu(menus[i-1].id);
                break;
            } else if ( menusPosition[len-1] <= currPos ||
                Math.ceil(window.innerHeight + currPos) >= document.documentElement.offsetHeight ) {
                this.props.selectMenu(menus[len-1].id);
                break;
            }
        }
        this.setState((state, props) => ({
            scrollPosition: document.documentElement.scrollTop
        }));
    }

    render() {
        const {
            menus,
            selectedMenu
        } = this.props;

        const pages = menus.map(menu =>
        <section id={menu.id} key={menu.id} className={cx(styles.page, (selectedMenu === menu.id ? styles.active : ''))} >{menu.label}</section>
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
    menus: state.Menus.menus,
    selectedMenu: state.Menus.selectedMenu
});

const mapDispatchToProps = dispatch => ({
    selectMenu: (selectedMenu) => dispatch(menuActions.selectMenu(selectedMenu))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);