import { CustomerBox, SelectContainer, StoreBox } from './SelectStyles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Select = () => {
    return (
        <SelectContainer>
            <CustomerBox>
                <Link to={'/customer/login'}>
                    <Typography>Hello Here select Customer</Typography>
                </Link>
            </CustomerBox>

            <StoreBox>
                <Link to={'/store/login'}>
                    <Typography>SELECT STORE HERE</Typography>
                </Link>
            </StoreBox>
        </SelectContainer>
    );
};

export default Select;
