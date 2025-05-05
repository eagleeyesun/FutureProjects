import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
  { label: 'New users', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
  { label: 'Orders', stats: '4,735', progress: 52, color: 'red', icon: 'down' },
  { label: 'Success Rate', stats: '85%', progress: 85, color: 'green', icon: 'up' },
  { label: 'Failure Rate', stats: '15%', progress: 15, color: 'orange', icon: 'down' },
  { label: 'Launches', stats: '122', progress: 90, color: 'violet', icon: 'up' },
] as const;

export function StatsRing() {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={isSmallScreen ? 50 : 80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={isSmallScreen ? 14 : 20} stroke={1.5} />
              </Center>
            }
          />
          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 'sm', cols: 1 },
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'lg', cols: 3 },
      ]}
    >
      {stats}
    </SimpleGrid>
  );
}