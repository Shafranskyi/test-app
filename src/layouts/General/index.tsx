import React from 'react';
import LayoutHeader from './LayoutHeader';
import { Grid } from '@mui/material';
import Content from './Content';

interface Props {
  currentPage?: string;
  breadcrumbs?: { label: string; link?: string }[];
  children: any
}

const GeneralLayout = ({ children, currentPage, breadcrumbs }: Props): React.ReactElement => {
  return (
    <Grid container direction="column" sx={{ height: '100%' }}>
      <LayoutHeader />
      <Content breadcrumbs={breadcrumbs ?? []} currentPage={currentPage}>
        {children}
      </Content>
    </Grid>
  );
};

export default GeneralLayout;
