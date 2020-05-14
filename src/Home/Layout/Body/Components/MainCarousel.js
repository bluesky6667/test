import React from "react";
import Slider from "react-slick";

class MainCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const tempStyle = {
            'backgroundColor': '#fff',
            'height': '600px',
            'border': '1px solid #6c757d'
        }
        return (
            <>
                <Slider {...settings}>
                    <div>
                        <div className="slider-item" style={tempStyle}>1</div>
                    </div>
                    <div>
                        <div className="slider-item" style={tempStyle}>2</div>
                    </div>
                </Slider>
            </>
        );
    }
}

export default MainCarousel;