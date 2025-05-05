import {
    Container,
    Title,
    Loader,
    TextInput,
    Select,
    ScrollArea,
    Text,
    Center,
    Group,
    Button,
    Pagination,
    Card,
    Badge,
    SimpleGrid,
    Image,
  } from '@mantine/core'
  import { useQuery } from '@tanstack/react-query'
  import { useMemo, useState, useEffect } from 'react'
  import { Link, useSearchParams } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom'
  import useAppStore from '../store/app.store'
  
  interface Launch {
    id: string
    name: string
    date_utc: string
    success: boolean
    details: string | null
    links: {
      patch: {
        small: string | null
      }
    }
  }
  
  const fetchLaunches = async (): Promise<Launch[]> => {
    const res = await fetch('https://api.spacexdata.com/v4/launches')
    if (!res.ok) throw new Error('Failed to fetch SpaceX launches')
    return res.json()
  }
  
  const ListPage = () => {
    const navigate = useNavigate()
    const { logout } = useAppStore()
    const { data, isLoading, isError } = useQuery(['launches'], fetchLaunches)
  
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || '')
    const [status, setStatus] = useState<string | null>(searchParams.get('status'))
    const [sortOrder] = useState<'asc' | 'desc'>('desc')
    const [currentPage, setCurrentPage] = useState(
      parseInt(searchParams.get('page') || '1', 10)
    )
  
    const itemsPerPage = 6 
  
    useEffect(() => {
      const params = new URLSearchParams()
      if (search) params.set('search', search)
      if (status) params.set('status', status)
      if (currentPage !== 1) params.set('page', String(currentPage))
      setSearchParams(params)
    }, [search, status, currentPage])
  
    const filtered = useMemo(() => {
      if (!data) return []
  
      let result = [...data]
  
      if (search) {
        result = result.filter((launch) =>
          launch.name.toLowerCase().includes(search.toLowerCase())
        )
      }
  
      if (status !== null) {
        result = result.filter((l) =>
          status === 'success'
            ? l.success === true
            : status === 'failure'
            ? l.success === false
            : true
        )
      }
  
      result.sort((a, b) => {
        const dateA = new Date(a.date_utc).getTime()
        const dateB = new Date(b.date_utc).getTime()
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      })
  
      return result
    }, [data, search, status, sortOrder])
  
    const totalPages = Math.ceil(filtered.length / itemsPerPage)
  
    const paginatedData = useMemo(() => {
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return filtered.slice(startIndex, endIndex)
    }, [filtered, currentPage])
  
    if (isLoading) {
      return (
        <Container my="xl">
          <Center>
            <Loader />
          </Center>
        </Container>
      )
    }
  
    if (isError || !data) {
      return (
        <Container my="xl">
          <Text c="red">Failed to fetch launches.</Text>
        </Container>
      )
    }
  
    return (
      <Container my="xl">
        <Group position="apart" mb="md">
          <Button
            component={Link}
            to="/"
            variant="light"
            color="teal"
            size="sm"
          >
            ← Home
          </Button>
  
          <Button
            variant="outline"
            color="red"
            size="sm"
            onClick={async () => {
              await logout()
              navigate('/login')
            }}
          >
            Logout
          </Button>
        </Group>
  
        <Title order={2} mb="lg">SpaceX Launches</Title>
  
        <Group mb="md" grow>
          <TextInput
            placeholder="Search by launch name"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value)
              setCurrentPage(1)
            }}
            label="Search"
          />
  
          <Select
            label="Filter by Status"
            data={[
              { value: 'success', label: 'Success' },
              { value: 'failure', label: 'Failure' },
            ]}
            placeholder="Status"
            value={status}
            onChange={(value) => {
              setStatus(value)
              setCurrentPage(1)
            }}
            clearable
          />
        </Group>
  
        <ScrollArea>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 'md', cols: 2 },
              { maxWidth: 'sm', cols: 1 },
            ]}
          >
            {paginatedData.map((launch) => (
              <Card
              key={launch.id}
              shadow="sm"
              padding="md" 
              radius="md"
              withBorder
              style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
            >
              <Card.Section>
                <Image
                  src={launch.links.patch?.small || 'N/A'}
                  height={120}
                  alt={launch.name}
                  withPlaceholder
                />
              </Card.Section>
            
              <Group position="apart" mt="sm" mb="xs">
                <Text fw={500} size="sm">{launch.name}</Text>
                <Badge color={launch.success ? 'green' : 'red'} variant="light">
                  {launch.success === true ? 'Success' : 'Failure'}
                </Badge>
              </Group>
            
              <Text size="xs" color="dimmed" mt="xs" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {launch.details ? launch.details.slice(0, 80) + '...' : 'No details available.'} 
              </Text>
            
              <Text size="xs" mt="xs" color="gray">
                Date: {new Date(launch.date_utc).toLocaleDateString()}
              </Text>
            
              <Button
                component={Link}
                to={`/detail/${launch.id}`}
                fullWidth
                mt="auto"
                radius="md"
                color="teal"
                size="sm" 
              >
                View Details
              </Button>
            </Card>
            ))}
          </SimpleGrid>
        </ScrollArea>
  
        <Center mt="md">
          <Pagination
            value={currentPage}
            onChange={setCurrentPage}
            total={totalPages}
            color="teal"
          />
        </Center>
      </Container>
    )
  }
  
  export default ListPage