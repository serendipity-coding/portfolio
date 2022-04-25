import { Avatar, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import girlImg from '../assets/girl.jpg';
import { Link } from 'react-router-dom';
export const About = () => {
  return (
    <Grid
      className="home title"
      container
      direction="column"
      sx={{ width: '90%', margin: 'auto' }}
      justifyContent="center"
    >
      <Avatar
        alt="girl on computer"
        src={girlImg}
        sx={{
          width: '9rem',
          height: '9rem',
          margin: 'auto',
          boxShadow: 'rgba(142, 202, 230, 0.4) 0px 8px 14px'
        }}
      />
      <Grid item>
        <Typography variant="h2" component="div" className="subTitle ">
          A little about my <span className="orangeText">Me</span>
        </Typography>
        <Typography
          variant="body2"
          component="div"
          className="subTitle "
          sx={{ fontSize: '20px', textAlign: 'justify' }}
        >
          I am a Full Stack Developer who specializes in JavaScript Technologies
          across the whole stack (Node.js, Express and ReactJs). I live in Lyon,
          France. I have experience building complete web applications with
          backend API. I like to solve problems🔎,take on challenges 💪 and
          learn new things. That’s one of the reasons that led me to coding:
          perpetual challenges to <span className="orangeText">overcome</span>.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '1rem' }}
      >
        {/* <Link
          to="www.linkedin.com/in/zouakamira"
          underline="none"
          // sx={{ color: "black", "&:hover": { color: "black" } }}
          target="_blank"
          rel="noreferrer"
        > */}
        <LinkedInIcon
          sx={{
            fontSize: 50,
            margin: '1rem',
            cursor: 'pointer',
            '&:hover': { color: '#219EBC' }
          }}
          onClick={() => {
            window.open('https://www.linkedin.com/in/zouakamira', '_blank');
          }}
        />
        {/* </Link> */}

        <GitHubIcon
          onClick={() => {
            window.open('https://github.com/serendipity-coding', '_blank');
          }}
          sx={{
            fontSize: 46,
            margin: '1rem',
            cursor: 'pointer',
            '&:hover': { color: '#219EBC' }
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: 50,
            margin: '1rem',
            cursor: 'pointer',
            '&:hover': { color: '#219EBC' }
          }}
          onClick={() => {
            window.open(
              'https://www.instagram.com/amira.world/?hl=fr',
              '_blank'
            );
          }}
        />
      </Grid>
    </Grid>
  );
};
