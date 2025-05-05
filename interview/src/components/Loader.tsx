import { Center, Loader as MantineLoader, Text, Stack } from '@mantine/core';

const Loader = () => (
  <Center style={{ height: '100vh', padding: 20, textAlign: 'center' }}>
    <Stack spacing="xl" align="center">
      <MantineLoader size="xl" color="blue" />
      <Text size="lg" weight={500}>
        What is a rocket?
      </Text>
      <Text size="sm" color="dimmed" maw={400}>
        A rocket is used to carry a spacecraft from Earth’s surface to space, usually to low Earth orbit or beyond, and is sometimes called a launch vehicle.
      </Text>
    </Stack>
  </Center>
);

export default Loader;