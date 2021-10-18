import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Style.css"
import { typography } from '@mui/system';
import FakebookLogo from '../../images/fakebooklogo.svg';
import LoginForm from './LoginForm';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  //color: theme.palette.text.secondary,
}));

export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} whiteSpace={false}>
        <Grid item xs={8}>
          <Item>
              <img src={FakebookLogo} alt="Fakebook logo" width="300px"/>
              <typography><br/>Connect with friends and the <br/>world around you on Fa<strong>k</strong>ebook.</typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><LoginForm/></Item>
        </Grid>
   
      </Grid>
    </Box>
  );
}