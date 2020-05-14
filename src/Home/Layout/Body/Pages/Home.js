import React from "react";
import SimplePage from "../Components/SimplePage";
import MainCarousel from "../Components/MainCarousel";

class Home extends React.Component {
    render() {
        return (
            <SimplePage>
                <MainCarousel></MainCarousel>
            </SimplePage>
        );
    }
}

export default Home;