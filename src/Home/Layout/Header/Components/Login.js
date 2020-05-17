import React from 'react';
import {Button} from "reactstrap";

class Login extends React.Component {
    handleClick = () => {
        window.open('https://asia1-wms.indoorplus.io/auth/login.do');
    }

    render() {
        return (
            <>
                <Button outline className="mr-2 btn-dashed" style={{
                    marginLeft: '2rem',
                    backgroundColor: '#e67e22',
                    borderColor: '#e67e22',
                    color: '#212529',
                    fontWeight: 'bold'
                }} active onClick={this.handleClick}>로그인</Button>
            </>
        )
    }
}

export default Login;