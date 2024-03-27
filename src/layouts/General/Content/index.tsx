import { Breadcrumbs, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

interface Props {
  breadcrumbs: { label: string; link?: string }[];
  currentPage?: string;
  children: any
}

const Content = ({ children, breadcrumbs }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={(theme) => ({
        height: '100%',
        padding: `${theme.spacing(10)} ${theme.spacing(3)}`,
        flexGrow: 1,
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      })}>
      <Grid item xs={12} sx={(theme) => ({ height: '100%', '& .MuiDataGrid-root': { background: theme.palette.primary.contrastText } })}>
        <Grid container>
          <Grid item xs={8}>
            <Breadcrumbs
              sx={{ mb: breadcrumbs.length > 0 ? 2 : 0 }}
              separator={<NavigateNextIcon fontSize="small" />}
              itemsAfterCollapse={2}
              aria-label="breadcrumb">
              {breadcrumbs.map((item) => (
                <Link component={RouterLink} underline="hover" color="inherit" to={item.link!}>
                  {item.label}
                </Link>
              ))}
            </Breadcrumbs>
          </Grid>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
