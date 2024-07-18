import React from 'react';
import { Container, Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Dex: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#333', color: '#fff', padding: 2, borderRadius: 1 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Average Dex</Typography>
        <Box>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>Swap</Button>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>Liquidity</Button>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>Portfolio</Button>
          <Button variant="contained" color="primary">More</Button>
        </Box>
        <Button variant="contained" color="secondary">Connect Wallet</Button>
      </Box>
      
      <Box display="flex" justifyContent="space-between">
        <Box flex={1} mr={2}>
          <Box sx={{ backgroundColor: '#444', padding: 2, borderRadius: 1 }}>
            <Typography variant="h6">Asset2/USD</Typography>
            <Box display="flex" justifyContent="space-between" mt={1} mb={2}>
              <Button variant="contained" size="small">15m</Button>
              <Button variant="contained" size="small">1H</Button>
              <Button variant="contained" size="small">4H</Button>
              <Button variant="contained" size="small">1D</Button>
              <Button variant="contained" size="small">1W</Button>
            </Box>
            <Box sx={{ height: 200, border: '1px dashed #fff' }}>
              {/* This is where the chart would go */}
            </Box>
          </Box>
        </Box>
        
        <Box flex={1} sx={{ backgroundColor: '#444', padding: 2, borderRadius: 1 }}>
          <Typography variant="h6">Do your first swap!</Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>From</InputLabel>
            <Select defaultValue="">
              <MenuItem value="Asset1">Asset1</MenuItem>
              <MenuItem value="Asset2">Asset2</MenuItem>
            </Select>
            <TextField fullWidth placeholder="$0" sx={{ mt: 1, backgroundColor: '#555', borderRadius: 1 }} />
          </FormControl>
          
          <Box display="flex" justifyContent="center" my={2}>
            <Typography variant="h4" sx={{ color: '#999' }}>⇅</Typography>
          </Box>
          
          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select defaultValue="">
              <MenuItem value="Asset1">Asset1</MenuItem>
              <MenuItem value="Asset2">Asset2</MenuItem>
            </Select>
            <TextField fullWidth placeholder="$0" sx={{ mt: 1, backgroundColor: '#555', borderRadius: 1 }} />
          </FormControl>
          
          <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>Connect Wallet</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Dex;
