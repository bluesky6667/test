import React from 'react';
import {Button} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const style = {
            marginLeft: '2rem',
            backgroundColor: '#e4833b',
            borderColor: '#e4833b',
            color: '#212529',
            fontWeight: 'bold'
        }

        return (
            <>
                <Button outline className="mr-2 btn-dashed" style={style} active>로그인</Button>
            </>
        )
    }
}

export default Login;