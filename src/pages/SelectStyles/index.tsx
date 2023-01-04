import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SelectContainer = styled(Box, { name: 'containerselectgrid' })({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

export const CustomerBox = styled(Box, { name: 'customerbox' })({
    backgroundColor: 'red',
    width: '15%',
    cursor: 'pointer',
});

export const StoreBox = styled(Box, { name: 'storebox' })({
    backgroundColor: 'blue',
    width: '15%',
    cursor: 'pointer',
});
