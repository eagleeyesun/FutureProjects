import { Box, Button, Group, Avatar, Text, Paper, Drawer, Burger, MediaQuery } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import useAppStore from '../store/app.store';
import { useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function Navbar() {
  const { user, logout, theme, toggleTheme } = useAppStore();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setDropdownOpen(false);
    setOpened(false);
  };

  return (
    <Box>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px',
          padding: '20px 10px',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'black' }}>
          ROCKETERY
          <Button
            onClick={toggleTheme}
            variant="subtle"
            size="sm"
            title="Toggle theme"
            style={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: '40px' }}
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </Button>
        </h1>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group>
            <Link to="/list" style={{ textDecoration: 'none', color: 'black', fontWeight: 800 }}>
              Rockets
            </Link>
          </Group>
        </MediaQuery>

        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group spacing="sm" style={{ position: 'relative', color: 'black' }}>
            {user ? (
              <div style={{ position: 'relative' }}>
                <Group spacing="xs" style={{ cursor: 'pointer' }} onClick={() => setDropdownOpen((prev) => !prev)}>
                  <Avatar radius="xl" size="sm" />
                  <Text size="sm">{user.displayName || user.email}</Text>
                </Group>

                {dropdownOpen && (
                  <Paper
                    shadow="md"
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      marginTop: 4,
                      padding: '8px 12px',
                      backgroundColor: '#fff',
                      zIndex: 10,
                    }}
                  >
                    <Button size="xs" variant="subtle" onClick={handleLogout} color="dark">
                      Logout
                    </Button>
                  </Paper>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="default">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </Group>
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" />
        </MediaQuery>
      </header>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
        size="xs"
        position="right"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <Box>
          <Link to="/list" onClick={() => setOpened(false)}>
            <Text mb="sm" c="dark" fw={600}>Rockets</Text>
          </Link>

          {user ? (
            <>
              <Group mb="sm">
                <Avatar radius="xl" size="sm" />
                <Text size="sm">{user.displayName || user.email}</Text>
              </Group>
              <Button fullWidth variant="subtle" onClick={handleLogout} color="dark">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpened(false)}>
                <Button fullWidth variant="default" mb="sm">Log in</Button>
              </Link>
              <Link to="/signup" onClick={() => setOpened(false)}>
                <Button fullWidth>Sign up</Button>
              </Link>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}