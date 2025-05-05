import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import useAppStore from './store/app.store';
import Loader from './components/Loader';
import './App.scss';

export default function App() {
  const { pathname } = useLocation();
  const { theme } = useAppStore();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
      {loading ? <Loader /> : <Outlet />}
    </MantineProvider>
  );
}