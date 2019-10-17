import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'; 



class Login extends Component {
    render() {
        return (
            <div className="loginCont">
               
                                    <div>
                        
                                    <Button variant="primary">Primary</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="success">Success</Button>
                                    <Button variant="warning">Warning</Button>
                                    <Button variant="danger">Danger</Button>
                                    <Button variant="info">Info</Button>
                                    <Button variant="light">Light</Button>
                                    <Button variant="dark">Dark</Button>
                                    <Button variant="link">Link</Button>

                                    </div>

            </div>
        );
    }
}



export default Login;
