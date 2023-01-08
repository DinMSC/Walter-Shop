import { RegContainer } from './CustRegStyles';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import './CustRegStyles/index.css';

const CustomerRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password1: '',
        password2: '',
    });

    const { name, surname, email, password1, password2 } = formData;

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
        <RegContainer>
            <form onSubmit={onSubmit}>
                <TextField
                    sx={{ marginBottom: 1 }}
                    id='standard-basic'
                    label='Name'
                    name='name'
                    value={name}
                    placeholder='Name'
                    onChange={onChange}
                    type='text'
                    variant='standard'
                />

                <TextField
                    sx={{ marginBottom: 1 }}
                    id='standard-basic'
                    label='Surname'
                    name='surname'
                    value={surname}
                    placeholder='Surname'
                    onChange={onChange}
                    type='text'
                    variant='standard'
                />
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
                    name='password1'
                    value={password1}
                    placeholder='Password'
                    onChange={onChange}
                    type='password'
                    variant='standard'
                />
                <TextField
                    sx={{ marginBottom: 1 }}
                    id='standard-basic'
                    label='Confirm Password'
                    name='password2'
                    value={password2}
                    placeholder='Confirm Password'
                    onChange={onChange}
                    type='password'
                    variant='standard'
                />
                <Button variant='contained' type='submit'>
                    REGISTER
                </Button>
            </form>
        </RegContainer>
    );
};

export default CustomerRegister;
