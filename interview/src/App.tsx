import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import useAppStore from './store/app.store';
import './App.scss';

export default function App() {
  const { pathname } = useLocation();
  const { theme } = useAppStore(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
}