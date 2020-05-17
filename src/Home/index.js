import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Body from "./Layout/Body";

class Main extends React.Component {
    render() {
        return (
                <div className="fixed-header">
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            );
    }
}
export default Main;