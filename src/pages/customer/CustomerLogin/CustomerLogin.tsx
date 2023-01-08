import { Link } from 'react-router-dom';
import { RegContainer } from '../CustomerRegister/CustRegStyles';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import '../CustomerRegister/CustRegStyles/index.css';

const CustomerLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div>
            <RegContainer>
                <form onSubmit={onSubmit}>
                    <TextField
                        sx={{ marginBottom: 1 }}
                        id='standard-basic'
                        label='Email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={onChange}
                        type='text'
                        variant='standard'
                    />
                    <TextField
                        sx={{ marginBottom: 1 }}
                        id='standard-basic'
                        label='Password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={onChange}
                        type='password'
                        variant='standard'
                    />
                    <Button variant='contained' type='submit'>
                        Login
                    </Button>
                </form>
            </RegContainer>
            <div>
                <Link to={'/customer/register'}>NO ACC REGI HERE</Link>
            </div>
        </div>
    );
};

export default CustomerLogin;
