import { AppShell} from '@mantine/core';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
  }

const Layout = ({ children }:LayoutProps) => {
  return (
    <AppShell
      padding="md"
    >
      {children}
    </AppShell>
  );
};

export default Layout;