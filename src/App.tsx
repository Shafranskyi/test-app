import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Backdrop, CircularProgress, CssBaseline, Typography } from "@mui/material";
import appConfig from './config.json';
import AppRoutes from "./Routes";
import axios from "axios";

export const CustomBackDrop = () => <Backdrop sx={{
  zIndex: 1,
  color: '#343434',
  display: 'flex',
  flexDirection: 'column',
}} open>
  <CircularProgress />
  <Typography sx={{ marginTop: '40px' }} variant="subtitle1">
    Loading
  </Typography>
</Backdrop>;

const Root = styled('div')(() => ({ position: 'absolute', width: '100%', height: '100%', fontFamily: 'Noto Sans' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

(() => {
  if (!appConfig.api_url) {
    throw new Error('API URL is undefined');
  }
})();

const API_URL = appConfig.api_url;
axios.defaults.baseURL = API_URL;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Root>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Root>
    </QueryClientProvider>
  );
}

export default App;
