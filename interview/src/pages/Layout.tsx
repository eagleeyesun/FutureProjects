import { AppShell, Header } from '@mantine/core';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
  }

const Layout = ({ children }:LayoutProps) => {
  return (
    <AppShell
      padding="md"
      header={<Header height={60}>Header Here</Header>}
    >
      {children}
    </AppShell>
  );
};

export default Layout;