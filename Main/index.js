import React from 'react';

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageContainer from "../Layout/PageContainer";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <>
                    <div className="fixed-header">
                        <Header/>
                        <PageContainer/>
                        <Footer/>
                    </div>
                </>
            );
    }
}
export default Main;