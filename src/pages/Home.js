// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//styles
import Typewriter from 'typewriter-effect';
import { Button, Grid, Typography } from '@mui/material';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid
      className="home title"
      container
      direction="column"
      sx={{ width: '90%', margin: 'auto', marginTop: '6rem' }}
    >
      <Grid>
        <Typography variant="h1" component="div" className="title">
          Hello, I am <span className="orangeText">Amira</span>
        </Typography>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              // .typeString('Hello, I am Amira ')
              // .pauseFor(1000)
              // .deleteAll()
              .typeString('And I am a FullStack Developer')
              .start();
          }}
        />
      </Grid>
      <Grid item md={4} xs={6}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            color: '#fff',
            borderRadius: '10px',
            width: '10rem',
            marginTop: '2rem'
          }}
          onClick={() => {
            // history.push(`/about`);
            navigate('/about');
          }}
        >
          Get to know me
        </Button>
      </Grid>
    </Grid>
  );
};
