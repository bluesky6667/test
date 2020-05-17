import React from 'react';
import styles from "../../../assets/home/Body.module.css";
import cx from 'classnames';
import {connect} from "react-redux";
import * as menuActions from "../../../reducers/Menus";
import MappedPage from "./Pages";
import TopButton from "./Components/TopButton";


class Body extends React.Component {
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
        const domEl = document.documentElement;
        const currPos = Math.ceil(domEl.scrollTop);
        const menusPosition = this.state.menusPosition;
        const menus = this.props.menus;
        const {
            selectMenu,
            setEnableTopBtn
        } = this.props;
        for (let i = 0, len = menusPosition.length; i < len; i++) {
            if ( currPos < menusPosition[i] ) {
                selectMenu(menus[i-1].id);
                break;
            } else if ( menusPosition[len-1] <= currPos ||
                (window.innerHeight + currPos) >= domEl.offsetHeight ) {
                    selectMenu(menus[len-1].id);
                break;
            }
        }
        this.setState((state, props) => ({
            scrollPosition: currPos
        }));
        setEnableTopBtn(currPos > 0);
    }

    render() {
        const {
            menus
        } = this.props;
        const pages = menus.map(menu =>
            <section id={menu.id} key={menu.id} className={cx(styles.page)} >
                <MappedPage menuId={menu.id}/>
            </section>
        );
        return (
            <>
                <div>
                    {pages}
                    <TopButton></TopButton>
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
    selectMenu: (selectedMenu) => dispatch(menuActions.selectMenu(selectedMenu)),
    setEnableTopBtn: (enableTopBtn) => dispatch(menuActions.setEnableTopBtn(enableTopBtn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);