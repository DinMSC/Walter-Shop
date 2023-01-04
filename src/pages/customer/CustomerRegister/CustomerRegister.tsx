import { RegContainer } from './CustRegStyles';
import { TextField, Button } from '@mui/material';

const CustomerRegister = () => {
    return (
        <RegContainer>
            <TextField id='standard-basic' label='Name' variant='standard' />
            <TextField id='standard-basic' label='Surname' variant='standard' />
            <TextField id='standard-basic' label='Email' variant='standard' />
            <TextField
                id='standard-basic'
                label='Password'
                variant='standard'
                type='password'
            />
            <TextField
                id='standard-basic'
                label='Confirm Password'
                variant='standard'
                type='password'
            />
            <Button>REGISTER</Button>
        </RegContainer>
    );
};

export default CustomerRegister;
