import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import catImg from '../assets/kitty.png';

const Portfolio = () => {
  return (
    <Grid
      className="home title"
      container
      direction="column"
      sx={{ width: '90%', margin: 'auto' }}
      justifyContent="center"
    >
      <Typography variant="h2" component="div" className="subTitle ">
        Recent projects
      </Typography>
      <Avatar
        alt="girl on computer"
        src={catImg}
        variant="square"
        sx={{
          margin: 'auto',
          width: '12rem',
          height: '12rem',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}
      />
      <Grid item>
        <Typography
          variant="body1"
          component="div"
          className="subTitle "
          sx={{ fontSize: '22px', margin: 'auto' }}
        >
          This page is under construction, meanwhile you can checkout my github
          repo to have an idea of my work.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
