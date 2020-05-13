import React from 'react';
import {Button} from "reactstrap";

class Login extends React.Component {
    render() {
        return (
            <>
                <Button outline className="mr-2 btn-dashed" style={{
                    marginLeft: '2rem',
                    backgroundColor: '#e67e22',
                    borderColor: '#e67e22',
                    color: '#212529',
                    fontWeight: 'bold'
                }} active>로그인</Button>
            </>
        )
    }
}

export default Login;