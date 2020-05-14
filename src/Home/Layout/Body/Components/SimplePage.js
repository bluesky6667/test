import React from "react";

class SimplePage extends React.Component {
    render() {
        return (
            <div className='m-3'>
                {this.props.children}
            </div>
        );
    }
}

export default SimplePage;