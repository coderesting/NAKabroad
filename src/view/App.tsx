import { ThemeProvider } from '@suid/material';
import Container from '@suid/material/Container';
import CssBaseline from '@suid/material/CssBaseline';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { Component } from 'solid-js';
import imgUrl from '../assets/universityFinder-128x128.png';
import { UniversityView } from '../model/UniversityView';
import { state } from '../store/store';
import { theme } from '../theme';
import { Filterbar } from './Filterbar';
import { UniversityCards } from './UniversityCards';
import { UniversityList } from './UniversityList';

const App: Component = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Paper sx={{ p: 5 }}>
        <Container maxWidth="sm">
          <Stack direction="row" alignItems="center" gap={4}>
            <img
              src={imgUrl}
              alt="University finder"
            />
            <Typography variant="h5" color="textSecondary">
              Find the perfect universtity for your semester abroad.
            </Typography>
          </Stack>
        </Container>
      </Paper>

      <Container sx={{ my: 5 }} maxWidth="sm">
        <Filterbar />
      </Container>

      {state.view.universities == UniversityView.LIST ?
        <UniversityList />
        :
        <UniversityCards />
      }

    </ThemeProvider>
  );
};

export default App;
