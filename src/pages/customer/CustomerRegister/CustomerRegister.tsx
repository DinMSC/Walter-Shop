import { RegContainer } from './CustRegStyles';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

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
            [e.target.value]: e.target.name,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <RegContainer>
            <form onSubmit={onSubmit}>
                <input
                    id='standard-basic'
                    name='name'
                    value={name}
                    placeholder='Name'
                    onChange={onChange}
                />
                <input
                    id='standard-basic'
                    name='surname'
                    value={surname}
                    placeholder='Surname'
                    onChange={onChange}
                />
                <input
                    id='standard-basic'
                    name='email'
                    value={email}
                    placeholder='Email'
                    onChange={onChange}
                />
                <input
                    id='standard-basic'
                    name='password1'
                    value={password1}
                    placeholder='Password'
                    type='password'
                    onChange={onChange}
                />
                <input
                    id='standard-basic'
                    name='password2'
                    value={password2}
                    placeholder='Confirm Password'
                    type='password'
                    onChange={onChange}
                />

                <Button>REGISTER</Button>
            </form>
        </RegContainer>
    );
};

export default CustomerRegister;
