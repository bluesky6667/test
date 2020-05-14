import React from 'react';
import SimplePage from "../Components/SimplePage";
import Home from './Home';
import Noti from "./Noti";

class MappedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuId: props.menuId
        };
    }
    render() {
        let menuId = this.state.menuId;
        switch (menuId) {
            case '_home':
                return <Home />
            case 'noti':
                return <Noti />
            default:
                return <SimplePage />
        }
    }
}

export default MappedPage;