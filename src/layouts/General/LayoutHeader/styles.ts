import { AppBar, Grid, styled } from '@mui/material';

export const Root = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  zIndex: theme.zIndex.drawer + 1,
  borderRadius: 0,
  boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.12)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
}));

export const Header = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  alignItems: 'center',
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.primary.main,
}));

export const LogoContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '250px',
  height: '48px',
}));
