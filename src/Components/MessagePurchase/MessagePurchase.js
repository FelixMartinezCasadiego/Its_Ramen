import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

 const MessagePurchase = ({purchaseID}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Thanks so much for your purchase! Your ID purchase is: {purchaseID} </Alert>
    </Stack>
  );
}

export default MessagePurchase;