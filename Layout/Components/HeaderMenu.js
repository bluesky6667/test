import React from 'react';
import {connect} from 'react-redux';
import MenuItem from './MenuItem';

class HeaderMenus extends React.Component {
    render() {
        const {
            menus,
            selectedMenu
        } = this.props;
        const menuItems = menus.map(menu => <MenuItem key={menu.id} menuId={menu.id} menuLabel={menu.label} active={selectedMenu === menu.id}/>);
        return (
            <>
                <ul className="nav">
                    {menuItems}
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    menus: state.Menus.menus,
    selectedMenu: state.Menus.selectedMenu
});

export default connect(mapStateToProps, null)(HeaderMenus);