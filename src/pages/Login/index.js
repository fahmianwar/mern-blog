import React from 'react'
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';

const Login = () => {
    return (

        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="Login Background"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login">Login</Button>
                <Gap height={100} />
                <Link title="Belum punya akun? Silakan daftar" />
            </div>
        </div>
    )
}

export default Login;
