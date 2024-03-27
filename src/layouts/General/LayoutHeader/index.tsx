import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Header, LogoContainer, Root } from './styles';

const LayoutHeader = (): React.ReactElement => {
  return (
    <Root position="fixed">
      <Header container xs>
        <Grid item>
          <Grid alignItems={'center'} container direction="row">
            <LogoContainer item>
              <Typography>Pokemon API Test App</Typography>
            </LogoContainer>
          </Grid>
        </Grid>
      </Header>
    </Root>
  );
};

export default LayoutHeader;
