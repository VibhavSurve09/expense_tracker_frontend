import { Box } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container>
        This page shall contain all graphs and overview of all expenses
      </Container>
    </Box>
  );
}
